
import React from 'react';
import {addMovieToList,handleMovieSearch} from '../actions';

class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.setState({
            showSearchResults:true,
            searchText:''
        });
    }
    handleAddToMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults:false
        });
    }

    handleSearch=()=>{
        const {searchText} =this.state;
        //now call the api but we should not call the api here as this is our component which is a part of out ui,
        // we should separate our ui logic with data fetching logic which should be done using actions
        this.props.dispatch(handleMovieSearch(searchText));

    }

    handleChange=(e)=>{//getting event from input
        this.setState({
            searchText:e.target.value
        });
    }
  render(){
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                </div>
            </div>
        );
   }
}

export default Navbar;
