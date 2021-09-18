import { FC, useEffect, useState } from "react"
import { FormControl, MenuItem, Select } from "@material-ui/core"

export const Header: FC = () => {
    const [countries, setCountries] = useState([
        'USA', 'UK', 'PAKISTAN'
    ]);

    useEffect(() => {
        
    }, []);
    

    return (
        <div className="app__header">
            <h1>COVID-19 Tracker</h1>
            <FormControl className="header__dropdown">
                <Select
                    variant="outlined"
                    value="abc"
                >
                    {
                        countries.map(country =>
                            (
                                <MenuItem value={country}>{country}</MenuItem>   
                            )
                    )
                    }
                    <MenuItem />
                </Select>
            </FormControl>
        </div>
    )
}