import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
//we keep our file imports below package imports
import './index.css';
import App from './components/App';
import combineReducers from './reducers';//optional combineReducers will be added default in create store cos we added default property to combineReducers 
//using currying here of fxn logger(obj,next,action)
//logger(obj)(next)(action) each part returns a fxn in which we pass next set of arguments one by one
// const logger=function({dispatch,getState}){//this fxn receives an argument obj which contains dispatch and getState properties//same as that of store which redux will pass in this logger fxn
//   return function(next){//next is used to switch to next middleware when multiple middlewares are present
//     return function(action){
       //middleware code
//       console.log('ACTION_TYPE=',action.type);
//       next(action);//calling next middleware with action as arguments if next middleware is present otherwise next will call dispatch with action as argument
//     }
//   }
// }
//short form of above middleware
const logger=({dispatch,getState})=>(next)=>(action)=>{
  //logger code
  console.log('ACTION_TYPE=',action.type);
  next(action);
}

const store=createStore(combineReducers,applyMiddleware(logger));//store requires reducer to be passed to it
console.log("store:",store);
// console.log("BEFORE STATE",store.getState());//getting state from reducers 
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });//dispatch fxn of store is required to send actions

// console.log("AFTER STATE",store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


