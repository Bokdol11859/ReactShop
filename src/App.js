import React, { useContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Data from "./data.js";
import AllNavBar from "./components/navbar/navbar.components";
import Main from "./components/main/main.components";
import Detail from "./components/detail/detail.components";

import { Route, Switch, Link } from "react-router-dom";

import axios from "axios";
import Cart from "./components/cart/Cart";

export let StockContext = React.createContext();

function Stock({ id }) {
  let stock = useContext(StockContext);
  return (
    <>
      <p>Stocks: {stock[id]}</p>
    </>
  );
}

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
        <Stock id={id} />
      </Link>
    </div>
  );
}

function App() {
  let [shoes, setShoes] = useState(Data);
  let [showMore, setShowMore] = useState(true);
  let [stocks, setStocks] = useState([1, 2, 3, 1, 2, 3]);
  return (
    <div className="App">
      <AllNavBar />
      <Switch>
        <Route exact path="/">
          <Main />
          <div className="container">
            <StockContext.Provider value={stocks}>
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
            </StockContext.Provider>
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
          <StockContext.Provider value={stocks}>
            <Detail shoes={shoes} />
          </StockContext.Provider>
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/:id">
          <h1>Details</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
