import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import { addMovies } from '../actions';

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
  render(){
    const {list}=this.props.store.getState();//{list:[],favourites:[]}
    console.log("RENDER",this.props.store.getState());
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
              {list.map((movie,index)=>{//getting each movie and its index while traversing list array
                return <MovieCard movie={movie} key={`movies-${index}`}/> //passing each movie to MovieCard using props
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
