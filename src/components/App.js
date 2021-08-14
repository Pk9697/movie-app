import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';

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
    store.dispatch({//? 1
      type:'ADD_MOVIES',
      movies: data
    })
    //?3
    console.log('STATE',store.getState());//*after that this console is executed acc to flow
  }
  render(){
    const movies=this.props.store.getState();
    console.log("RENDER");
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
              <div className="tab">
                Movies
              </div>
              <div className="tab">
                Favourites
              </div>
          </div>

          <div className="list">
              {movies.map((movie,index)=>{
                return <MovieCard movie={movie} key={`movies-${index}`}/> //passing each movie to MovieCard using props
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
