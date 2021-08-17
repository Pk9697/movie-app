import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//we keep our file imports below package imports
import './index.css';
import App from './components/App';
import combineReducers from './reducers';//optional combineReducers will be added default in create store cos we added default property to combineReducers 

const store=createStore(combineReducers);//store requires reducer to be passed to it
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


