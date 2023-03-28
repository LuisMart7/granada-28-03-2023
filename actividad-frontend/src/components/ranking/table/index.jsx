import { Card } from "@mui/material";
import "./style.css";

/**
 * Este componente es de ejemplo y solo sirve para marcar sitios en el layout.
 */
export const Table = ({ cards }) => {
    return (
        <div className="ranking__table">
            <Card sx={{minWidth: "100px"}}>
                1
            </Card>
            <Card>
                2
            </Card>
        </div>
    )
}