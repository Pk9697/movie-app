// {//in code an action is just a js object through which we can express an intent to modify state
//     type:'ADD_MOVIES'
//     //movies: [m1,m2,m3]
// }
// {
//     type:'DECREASE_COUNT'
// }
//action types
export const ADD_MOVIES='ADD_MOVIES';//use variables instead of string in reducers
export const ADD_TO_FAVOURITES='ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
//action creators
export function addMovies(movies){
    return {//? 1
        type:ADD_MOVIES,//action types
        movies: movies //or shorthand just ->movies
    }
}
export function addFavourite(movie){//we will get that particular movie which we want to add
    return {
        type:ADD_TO_FAVOURITES,//action types
        movie: movie 
    }
}
export function removeFromFavourites(movie){
    return{
        type:REMOVE_FROM_FAVOURITES,
        movie:movie
    }
}
export function setShowFavourites(val){
    return{
        type:SET_SHOW_FAVOURITES,
        val:val
    }
}
export function addMovieToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie){
    const url=`https://www.omdbapi.com/?apikey=61e4be91&t=${movie}`;

    return function(dispatch){//idealy actions is a object but here this action is returning a function so we handle this using middleware thunk in index.js 
        fetch(url)//which will return a promise
        .then(response=>response.json())//will get a response from fetching url
        .then(movie=>{
            console.log('movie',movie);
            //dispatch an action to store in state
            // dispatch({type='ADD_SEARCH_RESULT',movie})
        })
    }
    

    
}
