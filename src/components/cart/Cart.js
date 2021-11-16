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
          {props.state.map((item, i) => {
            return (
              <tr>
                <td>{i}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button>Delete Item</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function StateToProps(state) {
  return {
    state: state,
  };
}

export default connect(StateToProps)(Cart);
