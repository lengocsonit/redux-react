import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  render() {
    //Thuc hanh redux
    //Khai bao redux
    var redux = require('redux')
    var oldState = {
      num: [1, 2, 3],
      editState: false
    }

    //Khai bao reducer
    var reducer1 = (state = oldState, action) => {
      switch (action.type) {
        case "EDIT_STATE":
          return { ...state, editState: !state.editState }

        case "ADD_NUM":
          return { ...state, num: [...state.num, action.newItem] }

        case "DELETE":
          return { ...state, num: state.num.filter((value, index) => value !== action.num) }

        default:
          break;
      }

      return state
    }
    
    //Khai bao store
    //Khoi tao store1 quan ly reducer1
    var store1 = redux.createStore(reducer1)

    //Moi khi state thay doi, thi thuc hien
    store1.subscribe(() => {
      console.log("subscribe function")
      console.log(store1.getState())
    })

    store1.dispatch({ type: 'EDIT_STATE' })

    store1.dispatch({
      type: "ADD_NUM",
      newItem: 10
    })

    store1.dispatch({
      type: "DELETE",
      num: 1
    })

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
          </header>
        </div>
      </div>
    )
  }
}