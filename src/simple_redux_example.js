import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'

//STORE... a globalized state, holds all the state and data for the whole app


//ACTION describes what I want to do, e.g.  INCREMENT
// ACTIONS are functions that return objects

const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}



//REDUCER  describes how actions transform state.
// REDUCER checks the action I did and then modify the STORE

// a reducer takes as it's arguments state and action and returns state

const counter = (state = 0, action) => {
   switch (action.type) {
     case "INCREMENT":
       return state + 1;
     case "DECREMENT":
       return state -1; 
   }
}
// createStore is a function and takes STORE as an argument.  can also take INITIALSTATE
let store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

//DISPATCH  send actio to reducer.  Reducer checks what to do and then store gets updated

store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
