import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard'; 
import React from 'react';
import { addMovies,setShowFavourites } from '../actions';
import {connect} from '../index';

class App extends React.Component {

  componentDidMount(){
    //make api calls here to get movies from api 
    //dispatch action to store to add data from api calls to store
   
    this.props.dispatch(addMovies(data));
   
  }
  isMovieFavourite=(movie)=>{
    const {movies}=this.props;//{movies:{},search:{}} 

    const index=movies.favourites.indexOf(movie);//returns -1 if movie not found
    if(index!==-1){
      //found the movie
      return true;
    }

    return false;
  }
  onChangeTab=(val)=>{
    this.props.dispatch(setShowFavourites(val))
  }
  render(){
    const {movies,search}=this.props;//{movies:{},search:{}} 
    const {list,favourites,showFavourites}=movies; //movies:{list:[],favourites:[],showFavourites}
    // console.log("RENDER",this.props.store.getState());

    const displayMovies= showFavourites? favourites: list; //if showFavourites is true show movies from favourites array otherwise list array
    return (
      <div className="App">
        <Navbar 
          // search={search}  //this prop will be sent to navbar wrapper by default so we need to fetch this inside navbar wrapper then pass it as prop to navbar
          />
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
                          dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       //instead of using Consumer inside App we use it inside app wrapper and wrap App component inside Consumer and pass store as props
//       <StoreContext.Consumer>
//         {(store)=>
//           <App store={store}/>
//         }
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback(state){//what prop i want from the store to be used in my component

  return{//we want this amount of data to be passed in my component as props
    movies:state.movies,
    // search:state.search
  };

}
//connect fxn will return whole New Component
//callback or mapStateToProps (general name which react community uses)
const connectedAppComponent=connect(callback)(App);//connecting our app to the store
export default connectedAppComponent;//and then exporting
