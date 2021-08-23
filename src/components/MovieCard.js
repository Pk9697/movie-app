import React from "react"; 
import {connect} from 'react-redux';

import { addFavourite, removeFromFavourites } from "../actions";
// import {connect} from '../index';

class MovieCard extends React.Component {

    handleFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(addFavourite(movie));
    }
    handleUnFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFromFavourites(movie));
    }
    render(){
        const {movie,isFavourite}=this.props;
        // console.log("this.props:",this.props);
          return (
              <div className="movie-card">
                  <div className="left">
                      <img alt="movie-poster" src={movie.Poster}/>
                  </div>
                  <div className="right">
                      <div className="title">{movie.Title}</div>
                      <div className="plot">{movie.Plot}</div>
                      <div className="footer">
                          <div className="rating">{movie.imdbRating}</div>
                          {
                              isFavourite
                                ? <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourite</button>
                                : <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                           
                          }
                      </div>
                  </div>
              </div>
          );
    }
  }

 function callback(state){
      return{
        search:state.search
      };
  }

  const connectedAppComponent=connect(callback)(MovieCard); 
  export default connectedAppComponent;