import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';

import { ProjectState } from "./store/projectTypes";
import { initialProjectState } from "./store/projectReducer";
import { projectReducer } from "./store/projectReducer";

const reducer = combineReducers({
  projectState: projectReducer
});


export default function configureStore(preloadedState: any) {
    const middleWares = [ReduxThunk];
    const middleWareEnhancer = applyMiddleware(...middleWares)

//Thunk is middleware
  //DevTools is an enhancer (actually changes Redux)
  //applyMiddleware wraps middleware and returns an enhancer

  // to use only thunk middleware
  // const enhancer = compose(middlewareEnhancer);

  //to use thunk & devTools

  const Enhancer = composeWithDevTools(middleWareEnhancer);
    const store = createStore(reducer, preloadedState, Enhancer);
    return store;

}

export interface AppState {
  projectState: ProjectState;
}

export const initialAppState: AppState = {
  projectState: initialProjectState
  };


export const store = configureStore(initialAppState);