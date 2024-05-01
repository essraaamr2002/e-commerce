import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
const meddleware=[thunk]
const intialState={}
 const store = createStore(rootReducer,intialState,composeWithDevTools(applyMiddleware(...meddleware)))