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
