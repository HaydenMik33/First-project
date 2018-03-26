import React, { Component } from 'react';
import './Listcon.css';

class Listcon extends Component{
    constructor(props){
        super();
        this.state={
            title: props.title,
            overview : props.overview,
            poster_path :props.poster_path,
            inputSwitch : true,
            myf:()=>{console.log(props)}
        };
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleInputSwitch= this.handleInputSwitch.bind(this);
       }
    handleInputSwitch() {
        this.setState({
          inputSwitch: !this.state.inputSwitch
        });
      }
    
    handleConfirm() {
        const { updateMovie, id } = this.props;
        const { title, overview} = this.state;
        updateMovie(id,title,overview);
        this.setState({
          inputSwitch: !this.state.inputSwitch
        });
      }
  
 render(){
   //console.log(this.state.myWatchList);
 //console.log(this.state.myf());
     const { deleteMovie,addMovieToWatch,id } =this.props;
     const { inputSwitch,title,overview,poster_path } = this.state;
    // console.log(title);
     return (

         <div className="outline-for-MBcontainer">
            {inputSwitch ?(
            <div>
            <h4>{this.props.title}</h4>
               <div className ="flex-box-row">
            <p className="overview-style">{this.props.overview}</p>
            <img src={`http://image.tmdb.org/t/p/w200/${this.props.poster_path}`} alt="" />
                </div>
           <div className ="button-box">
                <button className="movie-button btn btn-outline-dark" onClick={this.handleInputSwitch}>
                    Edit
                </button>
           
                <button className="movie-button btn btn-outline-dark" onClick={() =>deleteMovie(id)}>
                      Delete
                 </button>
                 <button className="movie-button btn btn-outline-warning" onClick={()=>addMovieToWatch(id,this.props.title,this.props.overview)}>
                    Add to my Watch List
                  </button>
            </div>
          </div>
            ):(
     <div className="edit-big-box">

       <div className="title-edit-box">
          <span>Title :</span>
            <input
              className="edit-input" 
              value={title}
              onChange={e => this.setState({title:e.target.value})}
            />
        </div>
        <div clasName="overview-edit-box">
           <span>Over View :</span>
            <input
              className="overview-input edit-input"
              value={overview}
              onChange={e => this.setState({overview:e.target.value})}
            />
        </div>
            <div className="button-edit-box">
            <button className="btn btn-outline-primary" onClick={this.handleInputSwitch}>
              Cancel
            </button>
            <button className="confirm-button btn btn-outline-primary" onClick={this.handleConfirm}>
              Confirm
            </button>
          </div>
          </div>
            )}
            </div>
        
     )}
}

export default Listcon;