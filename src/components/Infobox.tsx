import { Card, CardContent, Typography } from "@material-ui/core";
import { FC } from "react";
import { IInfoBox } from "../interfaces/Infobox";

const Infobox: FC<IInfoBox> = (props: IInfoBox) => {
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" className="infoBox__title">
                    {props.title}
                </Typography>
                <h2 className="infoBox__cases">{props.todayCases}</h2>
                <Typography color="textSecondary" className="infoBox__title">
                    {props.total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Infobox;