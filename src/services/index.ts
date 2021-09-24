import axios from "axios";
import { ICountry } from "../interfaces/ICountry";

export abstract class DiseaseAPI {
    private static readonly BASE_PATH: string = 'https://disease.sh/v3/covid-19';

    /**
     * Get All countries Data
     * @returns Promise<Array<ICountry>>
     */
    public static async getCountries(): Promise<Array<ICountry>> {
        const response = await axios({
                                        method: 'GET',
                                        url: DiseaseAPI.BASE_PATH + '/countries',
                                    });
        const countries = response.data;
        return countries;                            
    }

    /**
     * Get data of single country
     * @param countrtCode: string 
     * @returns: Promise<ICountry> 
     */
    public static async getCountryData(countrtCode: string|undefined): Promise<ICountry> {
        const response = await axios({
            method: 'GET',
            url: DiseaseAPI.BASE_PATH + '/countries/'+countrtCode,
        });
        const countries = response.data;
        return countries;   
    }
    
}