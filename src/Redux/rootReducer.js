import { combineReducers } from "redux";
import AllCatReducers from "./AllCatReducers";
export default combineReducers({
    allCategory:AllCatReducers,
})