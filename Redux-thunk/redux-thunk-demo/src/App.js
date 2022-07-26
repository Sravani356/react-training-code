import './App.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import  { initialState } from "./redux-thunk-container";
import thunk from 'redux-thunk';
import LogState from './redux-thunk-container';
import { LOAD_PHOTOS_FAILURE, LOAD_PHOTOS_REQUEST, LOAD_PHOTOS_SUCCESS } from './redux-thunk-container'

// /let ReduxThunk = redux-thunk;


export const store = createStore(reducer, applyMiddleware(thunk));

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PHOTOS_REQUEST:
      return { ...state, processing: true };
    case LOAD_PHOTOS_SUCCESS:
      return { ...state, processing: false, photos: action.payload };
    case LOAD_PHOTOS_FAILURE:
      return { ...state, processing: false, error: action.payload.message };
    default:
      return state;
  }
}

function App() {
  return (
    <div>
      <Provider store={store}>
<LogState/>
      </Provider>
      
    </div>
  );
}

export default App;
