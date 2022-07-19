
import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from './components/FirstComponent';
import OrderForm from "./components/orderform";
import UserComponent from './components/UserComponent';

ReactDOM.render(
    <div className="d-flex justify-content-center">
      <OrderForm/>
    </div>,
    document.getElementById("root")
);