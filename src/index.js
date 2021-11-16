import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let store = createStore(() => {
  return [
    { id: 0, name: "Cool Shoes 0", quantity: 2 },
    { id: 1, name: "Cool Shoes 1", quantity: 2 },
    { id: 2, name: "Cool Shoes 2", quantity: 2 },
  ];
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
