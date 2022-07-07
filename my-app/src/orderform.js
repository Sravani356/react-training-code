
import { useState } from "react";

function OrderForm(props) {
    const [order, setOrder] = useState({
        item:"Laptop",
        price:300,
        tax:10,
    });

    function updateValue(event) { //this function is to make a text field editable
        console.log(event.target);
        setOrder({...order, [event.target.name]: event.target.value });
        };

    function calculateTotal(){
        if(order.tax < 0){
            return "error ";
        }
        return parseInt(order.price) * (1+ (order.tax / 100));
    }
    return (
        <div>
        <h1>Order Form:</h1>
        <input value = {order.item} name='item' onChange={updateValue}></input>
        <input value = {order.price} name='price' onChange={updateValue}></input>
        <input placeholder="tax" min = '0' value = {order.tax} type="number"name='tax' onChange={updateValue}></input>
        Total = {calculateTotal()}
        <div>
        <h1>{order.item}</h1>
        </div>
        </div>
    )
}

export default OrderForm;