import React, { Component } from 'react';
import './AddMovie.css';

class AddMovie extends Component{
    constructor(props){
        super(props);
        this.state ={
            title :"",
            overview:""
        };
        this.handleConfirm = this.handleConfirm.bind(this);
    };
    handleConfirm() {
        const { newMovie } = this.props;
        const { title, overview } = this.state;
        newMovie(title,overview);
        this.setState({
          title: "",
          overview: ""
        });
      }

 render(){
     const {title,overview} = this.state;
     console.log(title,overview)
     return (
         <div className="bigContainer-for-AddMovie">
         <h1>Add one of your <br />fav </h1>
             <input 
              type ="text"
               className="add-input"
               placeholder="Movie-title"
               value= {title}
               onChange = {
                   e=>
                   this.setState({title :e.target.value})
               }
             />
                 <input 
               className="textArea"
               placeholder="About this movie"
               value= {overview}
               onChange = {
                   e=>
                   this.setState({overview :e.target.value})
               }
             />
             <button className="add-button" className="btn btn-outline-primary" onClick={this.handleConfirm}>
                 ADD
             </button>
         </div>
     )
 }   
}

export default AddMovie;