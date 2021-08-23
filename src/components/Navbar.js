
import React from 'react';
import {addMovieToList,handleMovieSearch} from '../actions';
// import {StoreContext} from '../index';
import {connect} from '../index';


class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.setState({
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
        
        const {result,showSearchResults}=this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    {showSearchResults && 
                    <div className="search-results">
                        <div className="search-result">
                            <img src={result.Poster} alt="search-pic"/>

                            <div className="movie-info">
                                <span>{result.Title}</span>
                                <button onClick={()=>this.handleAddToMovies(result)}>
                                    Add to Movies
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
   }
}
// class NavbarWrapper extends React.Component{
//     render(){
//       return(
//         //instead of using Consumer inside App we use it inside app wrapper and wrap App component inside Consumer and pass store as props
//         <StoreContext.Consumer>
//           {(store)=>
//             <Navbar dispatch={store.dispatch} search={this.props.search}/>
//           }
//         </StoreContext.Consumer>
//         //search here is received from App component as props so as we are using props from NavbarWrapper we need to omport this search prop from this.props
//       );
//     }
// }

function callback(state){
    return{
        search:state.search
    };
}

const connectedAppComponent=connect(callback)(Navbar);
export default connectedAppComponent;
