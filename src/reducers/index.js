//make pure fxns for predictability

import { ADD_MOVIES,ADD_TO_FAVOURITES,REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITES } from "../actions";
const initialMoviesState={
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(currentState=initialMoviesState,action){//we will be getting current state and action(where movies array is passed)
    console.log("MOVIES REDUCER");
    // if(action.type===ADD_MOVIES){
    //     return {
    //         //using spread operators to return new state from initial currentstate and overriding list with arrays of movies coming from action.movies
    //         ...currentState,
    //         list:action.movies
    //     }
    // }
    // //a reducer has to return something either the original state or new state
    // return currentState;
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...currentState,
                list:action.movies
            }

        case ADD_TO_FAVOURITES:
            return{
                ...currentState,
                favourites:[action.movie,...currentState.favourites]//favourites array can have movies already present so we are storing that as well using spread operators
            }

        case REMOVE_FROM_FAVOURITES:
            const filteredArray=currentState.favourites.filter(
                movie=>movie.title!==action.movie.title
            );
            return{
                ...currentState,
                favourites:filteredArray
            }

        case SET_SHOW_FAVOURITES:
            return {
                ...currentState,
                showFavourites: action.val //either true or false coming from actions
            }
        default:
            return currentState;
    }
}

const initialSearchState={
    result:{}
};

export function search(state=initialSearchState,action){
    //no cases as of now
    console.log("SEARCH REDUCER");

    return state;
}

const initialRootState={//what would be the initial state or structure
    movies:initialMoviesState,
    search:initialSearchState
}
export default function rootReducer(state=initialRootState,action){

    return {
        movies: movies(state.movies,action),//movies should be managed by movie reducer by only passing movieState not the whole state
        search: search(state.search,action)//search should be managed by search reducer by only passing searchState not the whole state
    }
}
  