import { useState } from "react"
import './orderform.css';


export default function OrderForm(props) {
    const [order, setOrder] = useState({
        item: 'laptop',
        price: 30,
        tax: 10,
    })
    function updateValue(event) {
        setOrder({ ...order, [event.target.name]: event.target.value })
    }

    function calculate() {
        if (order.tax < 0 || order.price < 0) {
            return "wrong"
        }
        const newAmount = parseInt(order.price) * (1 + (order.tax / 100)) 
        return typeof newAmount === undefined?0:newAmount ;
    }
    function checkingSpreadOperator() {
        const first = [7, 3, 12];
        const second = [89, 5, 90];
        return [...first, ...second];

    }
    return (
        <div className="container">
            <label className="header">ORDER FORM</label>
            <div className="row">
                <div className="col-25">
                    <label >Item</label>
                </div>
                <div className="col-75">
                    <input value={order.item} id="text" type="text" name='item' onChange={updateValue} />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label >Price</label>
                </div>
                <div className="col-75">
                    <input value={order.price} id="price" type="number" name='price' onChange={updateValue} />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label >Tax</label>
                </div>
                <div className="col-75">
                    <input value={order.tax} type="number" name='tax' onChange={updateValue} />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label >Total Price: </label>
                </div>
                <div className="col-75">
                  <label>  {calculate()}</label>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

