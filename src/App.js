import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Data from "./data.js";
import AllNavBar from "./components/navbar/navbar.components";
import Main from "./components/main/main.components";

import { Link, Route, Switch } from "react-router-dom";

function Item({ title, content, price, url }) {
  return (
    <div className="col-md-4">
      <img src={url} width="100%" alt="item" />
      <h4>{title}</h4>
      <p>{content}</p>
      <p>${price}</p>
    </div>
  );
}

function App() {
  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <AllNavBar />
      <Route exact path="/">
        <Main />
        <div className="container">
          <div className="row">
            {shoes.map((shoe, i) => {
              return (
                <Item
                  key={i}
                  title={shoe.title}
                  content={shoe.content}
                  price={shoe.price}
                  url={shoe.url}
                />
              );
            })}
          </div>
        </div>
      </Route>
      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="100%"
              />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
      </Route>
    </div>
  );
}

export default App;
