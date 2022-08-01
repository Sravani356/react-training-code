import {
  ADD_ITEM_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  LOAD_ITEMS_FAILURE,
  LOAD_ITEMS_REQUEST,
  LOAD_ITEMS_SUCCESS,
  UPDATE_ITEM_FAILURE,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
} from "./action_constants";

import { ItemAPI } from "./api";

export function loadItems() {
  return (dispatch) => {
    let itemAPI = new ItemAPI();
    dispatch({ type: LOAD_ITEMS_REQUEST });
    return itemAPI
      .getAll(1)
      .then((data) => {
        dispatch({ type: LOAD_ITEMS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: LOAD_ITEMS_FAILURE, payload: error });
      });
  };
}

export function addItem(item) {
  return (dispatch) => {
    let itemAPI = new ItemAPI();
    dispatch({ type: ADD_ITEM_REQUEST });
    return itemAPI
      .add(item)
      .then((data) => {
        dispatch({ type: ADD_ITEM_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ADD_ITEM_FAILURE, payload: error });
      });
  };
}

export function updateItem(item) {
  return (dispatch) => {
    let itemAPI = new ItemAPI();
    dispatch({ type: UPDATE_ITEM_REQUEST });
    return itemAPI
      .update(item)
      .then((data) => {
        dispatch({ type: UPDATE_ITEM_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: UPDATE_ITEM_FAILURE, payload: error });
      });
  };
}

export function deleteItem(item) {
  return (dispatch) => {
    let itemAPI = new ItemAPI();
    dispatch({ type: DELETE_ITEM_REQUEST });
    return itemAPI
      .delete(item.id)
      .then((data) => {
        dispatch({ type: DELETE_ITEM_SUCCESS, payload: item });
      })
      .catch((error) => {
        dispatch({ type: DELETE_ITEM_FAILURE, payload: error });
      });
  };
}
