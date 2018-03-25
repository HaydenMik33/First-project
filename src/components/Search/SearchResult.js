import React, { Component } from 'react';

class SearchResult extends Component{
    constructor(props){
        super(props);
        this.state={
            myff:()=>{console.log(props)}
        }
    }
    render(){
        console.log(this.state.myff);
    return(
    <div>
             <h4>{this.props.title}</h4>
             <p>{this.props.overview}</p>      
     </div>
);
}}

export default SearchResult;
