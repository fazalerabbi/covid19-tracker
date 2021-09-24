import { Card, CardContent } from "@material-ui/core";
import { FC } from "react";
import { IGeneralProps } from "../interfaces/IGeneralProps";

const CasesByCountry: FC<IGeneralProps> = ({countryCode}) => {

    
    return (
        <Card>
          <CardContent>
            Live cases by Country
          </CardContent>
        </Card>

    )
}

export default CasesByCountry;