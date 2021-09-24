import { ICountry } from "./ICountry";

export interface IState {
    loader: boolean,
    countries: Array<ICountry>,
    country: ICountry|{}
}