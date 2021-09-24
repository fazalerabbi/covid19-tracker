import { IAction } from "../../interfaces/IAction";
import { IState } from "../../interfaces/IState";
import { ActionTypes } from "../actionTypes";

export const initialState: IState = {
    loader: false,
    countries: [],
    country: {}
};

export const AppReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case ActionTypes.FETCH_DATA_LOADER:
            return {
                ...state,
                loader: true
            };
        case ActionTypes.FETCH_COUNTRIES_DATA_SUCCESSFULL:
            return {
                 ...state,
                 loader: false,
                 countries: action.payload
            };
        default:
            return state;    

    }
}