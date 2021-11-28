import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let alertState = true;

function reducer2(state = alertState, action) {
  if (action.type === "click") {
    return !state;
  }
  return state;
}

let initialValue = [
  { id: 0, name: "Cool Shoes 0", quantity: 2 },
  { id: 1, name: "Cool Shoes 1", quantity: 2 },
  { id: 2, name: "Cool Shoes 2", quantity: 2 },
];

function reducer(state = initialValue, action) {
  if (action.type === "AddQuantity") {
    let tempValue = [...state];
    tempValue[action.i].quantity++;
    return tempValue;
  } else if (action.type === "SubQuantity") {
    let tempValue = [...state];
    if (tempValue[action.i].quantity > 0) {
      tempValue[action.i].quantity--;
    }
    return tempValue;
  } else {
    return state;
  }
}

let shoes = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={shoes}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
