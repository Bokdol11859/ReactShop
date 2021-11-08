import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./detail.components.scss";
import { StockContext } from "../../App";
import { CSSTransition } from "react-transition-group";
import { Nav } from "react-bootstrap";

// Styled-components
let Box = styled.div`
  padding: 20px;
`;

let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

function Detail({ shoes, setStock }) {
  let stocks = useContext(StockContext);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  let [alert, setAlert] = useState(true);
  let { id } = useParams();
  let history = useHistory();

  let [tab, setTab] = useState(0);
  let [switchTab, setSwitchTab] = useState(true);

  // let shoe = shoes.filter((obj) => obj.id == id);
  let shoe = shoes.find(function (item) {
    return item.id == id;
  });

  return (
    <div className="container">
      {/* Styled-components */}
      <Box>
        <Title>Detail</Title>
      </Box>
      {alert === true ? (
        <div className="alert">
          <p>Almost out of stock!</p>
          <p>{stocks[id]} stocks left</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img src={shoe.url} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setStock();
            }}
          >
            주문하기
          </button>
          <button className="btn btn-secondary">장바구니에 담기</button>
          {/* <button
            className="btn btn-danger"
            onClick={() => {
              //   history.push("/");
              history.goBack();
            }}
          >
            뒤로가기
          </button> */}
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setSwitchTab(false);
              setTab(0);
            }}
          >
            Option 0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setSwitchTab(false);
              setTab(1);
            }}
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              setSwitchTab(false);
              setTab(2);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={switchTab} classNames="animation" timeout={500}>
        <TabContent tab={tab} setSwitchTab={setSwitchTab} />
      </CSSTransition>
    </div>
  );
}

function TabContent({ tab, setSwitchTab }) {
  useEffect(() => {
    setSwitchTab(true);
  });

  if (tab == 0) {
    return <div>0</div>;
  } else if (tab == 1) {
    return <div>1</div>;
  } else if (tab == 2) {
    return <div>2</div>;
  }
}

export default Detail;
