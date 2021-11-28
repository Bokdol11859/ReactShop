import React from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.shoeState.map((item, i) => {
            return (
              <tr>
                <td>{i}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button
                    onClick={() => {
                      props.dispatch({ type: "AddQuantity", i: i });
                    }}
                    style={{ marginRight: "5px" }}
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => {
                      props.dispatch({ type: "SubQuantity", i: i });
                    }}
                  >
                    -
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alertState && (
        <div className="alert">
          <p>지금 구매하시면 신규할인 20%</p>
          <br />
          <Button
            onClick={() => {
              props.dispatch({ type: "click" });
            }}
          >
            Close
          </Button>
        </div>
      )}
    </>
  );
}

function StateToProps(state) {
  return {
    shoeState: state.reducer,
    alertState: state.reducer2,
  };
}

export default connect(StateToProps)(Cart);
