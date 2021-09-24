import { ICountry } from "./ICountry";

export interface IAction {
    type: string,
    payload: Array<ICountry>|ICountry
}