import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./detail.components.scss";

// Styled-components
let Box = styled.div`
  padding: 20px;
`;

let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

function Detail({ shoes }) {
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
          <button className="btn btn-primary">주문하기</button>
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
    </div>
  );
}

export default Detail;
