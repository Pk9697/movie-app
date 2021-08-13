import React from "react";
class MovieCard extends React.Component {
    render(){
        const {movie}=this.props;
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
                          <button className="favourite-btn">Favourite</button>
                      </div>
                  </div>
              </div>
          );
    }
  }
  
  export default MovieCard;