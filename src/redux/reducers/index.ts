import { combineReducers } from "redux";
import { AppReducer } from "./AppReducer";

const RootReducers = combineReducers({
    disease: AppReducer
})

export default RootReducers;