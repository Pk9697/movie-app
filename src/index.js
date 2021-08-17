import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//we keep our file imports below package imports
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const store=createStore(rootReducer);//store requires reducer to be passed to it
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


