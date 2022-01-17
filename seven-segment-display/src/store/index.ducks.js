import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import number from "./ducks/number";

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    number,
  });

const Reducers = (history) => appReducer(history);

export default Reducers;
