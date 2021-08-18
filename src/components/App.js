import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard'; 
import React from 'react';
import { addMovies,setShowFavourites } from '../actions';

class App extends React.Component {

  componentDidMount(){
    //make api calls here to get movies from api 
    //dispatch action to store to add data from api calls to store
    const {store} =this.props;
    //? 2
    store.subscribe(()=>{//*whenever we dispatch an action this subscription callback is called and thus displays updated from console 
      console.log('Updated');
      this.forceUpdate();//not recommended -should never use this
    })
    store.dispatch(addMovies(data));//?1 //returns object from actions 
    //?3
    console.log('STATE',store.getState());//*after that this console is executed acc to flow
  }
  isMovieFavourite=(movie)=>{
    const {movies}=this.props.store.getState();//{movies:{},search:{}} 

    const index=movies.favourites.indexOf(movie);//returns -1 if movie not found
    if(index!==-1){
      //found the movie
      return true;
    }

    return false;
  }
  onChangeTab=(val)=>{
    this.props.store.dispatch(setShowFavourites(val))
  }
  render(){
    const {movies}=this.props.store.getState();//{movies:{},search:{}} 
    const {list,favourites,showFavourites}=movies; //movies:{list:[],favourites:[],showFavourites}
    console.log("RENDER",this.props.store.getState());

    const displayMovies= showFavourites? favourites: list; //if showFavourites is true show movies from favourites array otherwise list array
    return (
      <div className="App">
        <Navbar 
          dispatch={this.props.store.dispatch}/>
        <div className="main">
          <div className="tabs">
          {/* we need to call the fxn instead of passing the reference so that vvalue can be passed as argument */}
              <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>{this.onChangeTab(false)}}>
                Movies
              </div>
              <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>{this.onChangeTab(true)}}>
                Favourites
              </div>
          </div>

          <div className="list">
              {displayMovies.map((movie,index)=>{//getting each movie and its index while traversing list array
                return <MovieCard 
                          movie={movie}  //passing each movie to MovieCard using props
                          key={`movies-${index}`} 
                          dispatch={this.props.store.dispatch}
                          isFavourite={this.isMovieFavourite(movie)}
                          /> 
              })}
          </div>

          {displayMovies.length===0?<div className="no-movies">No movies to display! </div> : null}
        </div>
      </div>
    );
  }
}

export default App;
