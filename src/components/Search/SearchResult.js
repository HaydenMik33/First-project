import React, { Component } from 'react';
import "./SearchResult.css";

class SearchResult extends Component{ 
    render(){
        console.log(this.props);
         const {resultMovie} = this.props;
         let myResultList = resultMovie.map((element,i) => {
              return (
              <div key={i} className="big-box-search-result">
                  <h1>{element.title}</h1>
                  <div  className ="flex-box-result">
                  <p className="overview-search-style">{element.overview}</p>
                  <img src={`http://image.tmdb.org/t/p/w200/${element.poster_path}`} alt="" />
                </div>
                </div>
              )
         });
         console.log(myResultList);
    return(
    <div>
            {myResultList}
     </div>
);
}}

export default SearchResult;
