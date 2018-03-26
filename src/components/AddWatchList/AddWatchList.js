import React, { Component } from 'react';
import "./AddWatchList.css";
class AddWatchList extends  Component{
    constructor(){
        super();
        this.state={
           watchButtonSwitch:false, 
        }
    }
  render(){
      const { watchButtonSwitch } = this.state;
     //console.log(this.state);
     console.log(this.props);
      return(
          <div>
        <button
        className="btn btn-outline-warning"
        onClick={() => this.setState({watchButtonSwitch:!this.state.watchButtonSwitch})}
      >Watch later List</button>
      {(watchButtonSwitch) ? (
          this.props.myWatchList.map((movie)=>{
            return (
                  <div className="watch-list-style">
                    <div className="border-for-watchList">
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                  </div>
                  </div>
              )
             })
      ) : null }
      </div>
      )
    
  }

}

export default AddWatchList;
