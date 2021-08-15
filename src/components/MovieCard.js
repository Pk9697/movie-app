import React from "react"; 
import { addFavourite } from "../actions";

class MovieCard extends React.Component {

    handleFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(addFavourite(movie))
    }
    handleUnFavouriteClick=()=>{
        
    }
    render(){
        const {movie,isFavourite}=this.props;
        // console.log("this.props:",this.props);
          return (
              <div className="movie-card">
                  <div className="left">
                      <img alt="movie-poster" src={movie.posterurl}/>
                  </div>
                  <div className="right">
                      <div className="title">{movie.title}</div>
                      <div className="plot">{movie.storyline}</div>
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
  
  export default MovieCard;