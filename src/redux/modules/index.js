import { combineReducers } from "redux";
import userReducer from './users';
import postReducer from "./prac";

const rootReducer = combineReducers({
    userReducer,
    postReducer,

})
export default rootReducer;