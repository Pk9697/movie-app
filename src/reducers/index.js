//make pure fxns for predictability

import { ADD_MOVIES,ADD_FAVOURITE } from "../actions";
const initialMoviesState={
    list:[],
    favourites:[]
}
export default function movies(currentState=initialMoviesState,action){//we will be getting current state and action(where movies array is passed)
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

        case ADD_FAVOURITE:
            return{
                ...currentState,
                favourites:[action.movie,...currentState.favourites]//favourites array can have movies already present so we are storing that as well using spread operators
            }

        default:
            return currentState;
    }
}

  