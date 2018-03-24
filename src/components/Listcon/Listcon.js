import React, { Component } from 'react';
import './Listcon.css';

class Listcon extends Component{
    constructor(props){
        super();
        this.state={
            title: props.title,
            overview : props.overview,
            inputSwitch : true
        };
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleSwitch= this.handleSwitch.bind(this);
    }
    handleSwitch() {
        this.setState({
          inputSwitch: !this.state.inputSwitch
        });
      }
    
    handleConfirm() {
        const { updateMovie, id } = this.props;
        const { title, overview } = this.state;
        updateMovie(id,title,overview);
        this.setState({
          inputSwitch: !this.state.inputSwitch
        });
      }
 render(){
     const { deleteMovie,id } =this.props;
     const { inputSwitch,title,overview } = this.state;
     return (
         <div className="outline-for-MBcontainer">
            {inputSwitch ?(
            <div>
            <h4>{this.props.title}</h4>
            <p>{this.props.overview}</p>
            <button className="card-button" className="btn btn-outline-dark" onClick={this.handleSwitch}>
              Edit
            </button>
           
            <button className="card-button" className="btn btn-outline-dark" onClick={() =>deleteMovie(id)}>
              Delete
            </button>
          </div>
        ) : (
          <div>
            <input
              className="card-input"
              value={title}
              onChange={e => this.setState({title:e.target.value})}
            />
            <input
              className="card-input"
              value={overview}
              onChange={e => this.setState({overview:e.target.value})}
            />
            <button className="card-button" className="btn btn-outline-dark"onClick={this.handleSwitch}>
              Cancel
            </button>
            <button className="card-button" className="btn btn-outline-dark" onClick={this.handleConfirm}>
              Confirm
            </button>
          </div>
            )}
         </div>
     )
 } 

}

export default Listcon;