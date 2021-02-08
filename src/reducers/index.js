import { combineReducers } from "redux";
import { sportReducer } from "../reducers/SportsReducers"

export default combineReducers({
    selectedSport: sportReducer,
  });