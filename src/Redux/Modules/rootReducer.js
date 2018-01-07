import { combineReducers } from "redux";
import todo from "./Todo/todo.reducer";
import fuelSavings from "./FuelSaving/fuelSaving.reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  todo,
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
