// var ReduxThunk = window.ReduxThunk;


const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
const store = Redux.createStore(
  reducer,
  compose(Redux.applyMiddleware(...[ReduxThunk]))
);