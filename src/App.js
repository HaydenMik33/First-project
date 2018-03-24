import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import AddMovie from "./components/AddMovie/AddMovie";
import Listcon from './components/Listcon/Listcon';
import Header from "./components/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
    this.updateMovie = this.updateMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  componentDidMount(){
    axios.get("/api/movies").then(res =>{
      console.log(res);
      this.setState({
       movies : res.data
      });
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

  
  render() {
    const {movies} = this.state;
    let myMovieList = movies.map(movie=>{
      return (
        <Listcon
          key ={movie.id}
          id ={movie.id}
          title={movie.title}
          overview ={movie.overview}
          updateMovie={this.updateMovie}
          deleteMovie={this.deleteMovie}
        />
      )
    })

    return (
      
      <div className="background-whole-page">
      
       
             <Header />
             <div className="container-body">
            <div className="AddMovie-container">
                <AddMovie newMovie={this.newMovie} />
            </div>
             <div className="List-container">
                 {myMovieList}
             </div>
             </div>
         <div className="footer">
           </div>
      </div>
    )
  }
}

export default App;
