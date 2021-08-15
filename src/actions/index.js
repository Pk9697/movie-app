// {//in code an action is just a js object through which we can express an intent to modify state
//     type:'ADD_MOVIES'
//     //movies: [m1,m2,m3]
// }
// {
//     type:'DECREASE_COUNT'
// }
//action types
export const ADD_MOVIES='ADD_MOVIES';//use variables instead of string in reducers
//action creators
export function addMovies(movies){
    return {//? 1
        type:ADD_MOVIES,//action types
        movies: movies //or shorthand just ->movies
    }
}
