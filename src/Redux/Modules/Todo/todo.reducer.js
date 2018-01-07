import * as ActionTypes from "./todo.actionConstants";
const initialState = {
  fetchingTodos: false,
  fetchingTodosError: null,
  items: [],
  isAllActive: false
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TOGGLE_ALL_TODO:
      return {
        ...state,
        isAllActive: true
      };

    case ActionTypes.DONE_ITEM:
      const newModifiedTodoList = state.items.map(x => {
        if (x.id == action.id) {
          x.status = "done";
        }
        return x;
      });
      return {
        ...state,
        items: newModifiedTodoList
      };

    case ActionTypes.ADD_ITEM:
      const item = {
        id: state.items.length,
        name: action.item,
        date: action.dateAdded
      };
      const newTodoList = [...state.items, item];
      return {
        ...state,
        items: newTodoList
      };

    case ActionTypes.REMOVE_ITEM:
      const newFilteredTodoList = state.items.filter(x => {
        return x.id !== action.id;
      });
      return {
        ...state,
        items: newFilteredTodoList
      };

    case ActionTypes.FETCH_TODOS:
      return {
        ...state,
        fetchingTodos: true
      };
    case ActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        fetchingTodos: false,
        items: action.payload
      };
    case ActionTypes.FETCH_TODOS_FAILED:
      return {
        ...state,
        fetchingTodos: false,
        fetchingTodosError: action.error
      };
    default:
      return state;
  }
}
