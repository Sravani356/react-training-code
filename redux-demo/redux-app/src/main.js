import { createStore } from "redux";
//action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
//action creators
function increment() {
    return { type: INCREMENT };
}
function decrement() {
    return { type: DECREMENT };
}
//reducer
function reducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

//store
var store = createStore(reducer);

export default function LogState() {//component
    console.log(store.getState().toString());
    return (
        <div>
            <button>Click</button>
        </div>
    )
}

store.subscribe(LogState);

store.dispatch({ type: '' });
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());