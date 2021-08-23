import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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
  if(typeof action!=='function'){
    console.log('ACTION_TYPE=',action.type);
  }
  next(action);
}
//optional this middleware we created to handle action type if fxn is handled by thunk package which we imported in line 4
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   //logger code
//   if(typeof action==='function'){//for handle function(dispatch) in handleMovieSearch action
//     action(dispatch);//1 here we dispatch an action if the action type is function
//     return;
//   }
//   next(action);//2 otherwise we return action as an object to next middleware if present or dispatch this action if no middleware present
// }

const store=createStore(combineReducers,applyMiddleware(logger,thunk));//store requires reducer to be passed to it
console.log("store:",store);

export const StoreContext=createContext();

console.log('StoreContext',StoreContext);

class Provider extends React.Component{
  render(){
    const {store}=this.props;
    return <StoreContext.Provider value={store}>
      {/* this refers to whatever we pass(components) in between Provider which will thus render app component */}
      {this.props.children}  
    </StoreContext.Provider>
  }
}

// const connectedAppComponent=connect(callback)(App);
export function connect(callback){
  return function(Component){
    class ConnectedComponent extends React.Component{
      constructor(props){
        super(props);
        //subscribe to render this component
        //* when we call subscribe it will eventually call another fxn unsubscribe to prevent memory leaks when any component is destroyed
        this.unsubscribe=this.props.store.subscribe(()=>this.forceUpdate());//we dont have access to props store here so we need to wrap this component
      }

      componentWillUnmount(){
        this.unsubscribe();
      }

      render(){
        const {store}=this.props;
        const state=store.getState();
        const dataToBePassedAsProps=callback(state);//callback state will return object which we want from state
        return (
          <Component 
            {...dataToBePassedAsProps} //movies:{} search:{} //shortform using spread operators
            dispatch={store.dispatch}
          />
        );
      }
    }
    class ConnectedComponentWrapper extends React.Component{
      render(){//grabbing store and passing it as props to Connected component so that we can use store in constructor to subscribe to store
          return (
          <StoreContext.Consumer>
            {store=><ConnectedComponent store={store}/>}
          </StoreContext.Consumer>
          );
      }
    }
    return ConnectedComponentWrapper;
  };
}


// console.log("BEFORE STATE",store.getState());//getting state from reducers 
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });//dispatch fxn of store is required to send actions

// console.log("AFTER STATE",store.getState());

//passing store to each and every component of App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);


