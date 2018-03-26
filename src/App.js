import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import AddMovie from "./components/AddMovie/AddMovie";
import Listcon from './components/Listcon/Listcon';
import Header from "./components/Header/Header";
import SearchResult from "./components/Search/SearchResult";
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchValue:"",
      resultMovie:[],
      searchSwitch:false
    };
    this.updateMovie = this.updateMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.newMovie = this.newMovie.bind(this);
    this.searchForTheSame = this.searchForTheSame.bind(this);
  }

  componentDidMount(){
    axios.get("/api/movies").then(res =>{
     // console.log(res);
      this.setState({
       movies : res.data
      });
      console.log(this.state)
    })
    .catch(console.log);
  }

  updateMovie(id, title, overview) {
    axios
      .put(`/api/movies/${id}`, { title, overview })
      .then(res => {
        this.setState({
          movies: res.data
        });
      })
      .catch(console.log);
  }

  deleteMovie(id) {
    axios
      .delete(`/api/movies/${id}`)
      .then(res => {
        this.setState({
          movies: res.data
        });
      })
      .catch(console.log);
  }

  newMovie(title, overview) {
    axios
      .post("/api/movies", { title,overview })
      .then(res => {
        this.setState({
          movies
          : res.data
        });
      })
      .catch(console.log);
  }
  searchForTheSame(){
    const{movies,searchValue,resultMovie} = this.state;
    var empty =[];
    movies.forEach(movie=>{
      //movies is an array of objs
      if(movie.title.toLowerCase().includes(searchValue.toLowerCase())){
        // console.log(movie.title) 
        empty.push(movie);
        this.setState({
          searchSwitch:!this.state.searchSwitch,
          resultMovie: empty
        })
      }
    })
  //console.log(resultMovie);
  }
    
  
  render() {
    const {movies} = this.state;
    let myMovieList = movies.map((movie)=>{
      return (
        <Listcon
          key ={movie.id}
          id ={movie.id}
          title={movie.title}
          overview ={movie.overview}
          poster_path ={movie.poster_path}
          updateMovie={this.updateMovie}
          deleteMovie={this.deleteMovie}
        />
      )
    })
    //console.log(this.state.searchValue);
  // console.log(this.state.resultMovie)
    return (
      
      <div className="background-whole-page"> 
           
             <Header />
    <div className="container-body">

       <div className="left-controller">
                <div className="AddMovie-container">
                <AddMovie newMovie={this.newMovie} />
                 </div>

                 <div className="search-big-box">
                 <h1>Search<br /> your<br />fav</h1>
                    <input 
                       placeholder="type movie title"
                       className="search-area"
                        onChange={(e)=>this.setState({searchValue : e.target.value})}
                     /> 
                      <button onClick={this.searchForTheSame} className="btn btn-outline-primary">Search</button>
                </div>
         </div>

             <div className="List-container">
               {this.state.searchSwitch ?(
                 <SearchResult resultMovie ={this.state.resultMovie}/>
               ):(
                 <div>
                {myMovieList}
                </div>
               )}
             </div>
     </div>
             
         <div className="footer">
           </div>
      </div>
    )
  }
}

export default App;
