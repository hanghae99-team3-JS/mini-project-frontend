import { createStore, combineReducers, applyMiddlewares, compose } from "redux";
import { users } from "../redux/modules/users";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({ users });

const enhancer = applyMiddlewares(...middlewares);

const store = createStore(rootReducer, enhancer);


export default store;