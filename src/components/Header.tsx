import { ChangeEvent, FC, useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { ICountry } from "../interfaces/ICountry";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchCountriesData } from "../redux/actions";


export const Header: FC = () => {
    const countries = useSelector((state: RootStateOrAny) => {
        return state.disease.countries
    });
    const [countryCode, setCountryCode] = useState<string|unknown>("worldwide");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountriesData());        
    }, []);
    
    const onCountryChange = (event: ChangeEvent<{ name?: string; value: unknown }>):void => {
        setCountryCode(event.target.value);
    }
    return (
        <div className="app__header">
            <h1>COVID-19 Tracker</h1>
            <FormControl className="header__dropdown">
                <Select
                    variant="outlined"
                    value={countryCode}
                    onChange={ onCountryChange }
                >
                    <MenuItem value="worldwide">Worldwide</MenuItem>
                    {
                        (countries) ? countries.map((country: ICountry, index: number) =>
                            (
                                <MenuItem key={index} value={country.countryInfo.iso2}>{country.country}</MenuItem>   
                            )
                        ) : 'Loading...'
                    }
                    <MenuItem />
                </Select>
            </FormControl>
        </div>
    )
}