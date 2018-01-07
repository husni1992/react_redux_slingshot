import * as ActionTypes from "./todo.actionConstants";
import { getFormattedDateTime } from "../../../utils/dates";
import * as API from "../../../services/Api";
import handleFetch from "../../../services/HandleFetch";

export function toggleAll() {
  return { type: ActionTypes.TOGGLE_ALL_TODO };
}

export function addItem(item) {
  return {
    type: ActionTypes.ADD_ITEM,
    dateAdded: getFormattedDateTime(),
    item
  };
}

export function removeItem(id) {
  return { type: ActionTypes.REMOVE_ITEM, id };
}

export function doneItem(id) {
  return { type: ActionTypes.DONE_ITEM, id };
}

export function fetchAllTodos() {
  console.log("fetchAllTodos");
  return dispatch => {
    dispatch({ type: ActionTypes.FETCH_TODOS });
    handleFetch(
      dispatch,
      API.fetchAllTodos(),
      ActionTypes.FETCH_TODOS_SUCCESS,
      ActionTypes.FETCH_TODOS_SUCCESS,
      true
    );
  };
}
