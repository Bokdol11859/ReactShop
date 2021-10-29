import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Data from "./data.js";
import AllNavBar from "./components/navbar/navbar.components";
import Main from "./components/main/main.components";
import Detail from "./components/detail/detail.components";

import { Route, Switch, Link } from "react-router-dom";

import axios from "axios";

function Item({ id, title, content, price, url }) {
  return (
    <div className="col-md-4">
      <Link
        to={`/detail/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img src={url} width="100%" alt="item" />
        <h4>{title}</h4>
        <p>{content}</p>
        <p>{price}원</p>
      </Link>
    </div>
  );
}

function App() {
  let [shoes, setShoes] = useState(Data);
  let [showMore, setShowMore] = useState(true);
  return (
    <div className="App">
      <AllNavBar />
      <Switch>
        <Route exact path="/">
          <Main />
          <div className="container">
            <div className="row">
              {shoes.map((shoe, i) => {
                return (
                  <Item
                    key={i}
                    id={shoe.id}
                    title={shoe.title}
                    content={shoe.content}
                    price={shoe.price}
                    url={shoe.url}
                  />
                );
              })}
            </div>
          </div>
          {showMore === true ? (
            <button
              className="btn btn-dark"
              onClick={() => {
                axios
                  .get("https://api.jsonbin.io/b/617bfdf34a82881d6c6741a8")
                  .then((result) => {
                    let tempData = [...shoes, ...result.data];
                    setShoes(tempData);
                    setShowMore(false);
                  })
                  .catch(() => {
                    alert("Data not found");
                  });
              }}
            >
              Load More
            </button>
          ) : null}
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id">
          <div>Anything</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
