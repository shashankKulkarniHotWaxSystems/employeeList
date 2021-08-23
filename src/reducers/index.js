import addNewEmployeeMethod from "./addNewEmployee";
import apiCallReducer from "./apiCallReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addNewEmployeeMethod,apiCallReducer
});

export default rootReducer;