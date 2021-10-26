import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Data from "./data.js";
import AllNavBar from "./components/navbar/navbar.components";
import Main from "./components/main/main.components";
import Detail from "./components/detail/detail.components";

import { Route, Switch } from "react-router-dom";

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
      <Switch>
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
