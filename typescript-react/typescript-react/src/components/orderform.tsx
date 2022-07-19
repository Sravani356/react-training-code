import * as React from "react";
import * as ReactDOM from "react-dom";
import { Order } from "./order";
// import { useState} from 'react';

function OrderForm() {
  const [order, setOrder] = React.useState(new Order());
  function save() {
    console.log("saved");
  }

  function update(event: any) {
    console.log(event.target.value);
    const order = new Order();
    order.price = event.target.value;
    setOrder(order);
  }
  return (
<>
<div className="card text-center d-inline-flex m-5 p-5">
  <div className="card-header text-primary fw-bold">
  Hello, Welcome to React and TypeScript

  </div>
  <div className="card-body p-5">
    <h5 className="card-title p-3">
    This is the Order Form {order.item}

    </h5>
    <input className="card-text"
    type="number"
            placeholder="Price"
            onChange={update}
            value={order.price}
        />
 <button onClick={save} className="btn btn-primary mb-1">Save</button>

  </div>
  <div className="card-footer text-success fw-300">
    Price: {order.price}
  </div>
</div>
</>


  );
}

export default OrderForm;
