import { ICountry } from "../../interfaces/ICountry";
import { DiseaseAPI } from "../../services";
import { ActionTypes } from "../actionTypes";

export const fetchDataLoader = () => {
    return {
        type: ActionTypes.FETCH_DATA_LOADER
    };
}
export const fetchCountriesDataSuccessfull = (countries: Array<ICountry>) => {
    return {
        type: ActionTypes.FETCH_COUNTRIES_DATA_SUCCESSFULL,
        payload: countries
    }
}

export const fetchCountriesData = () => {
    return (dispatch: any) => {
        dispatch(fetchDataLoader());

        DiseaseAPI.getCountries()
        .then((countries: Array<ICountry>) => {
            dispatch(fetchCountriesDataSuccessfull(countries));
        }).catch((error: any) => {
            console.log(error);
        });
    }
}

export const fetchCountryData = (country: ICountry) => {
    return {
        type: ActionTypes.FETCH_COUNTRY_DATA,
        payload: country
    };
}

