import { Filter } from "./filter";
import { Table } from "./table";
import "./style.css";
import { useState } from "react";

/**
 * Este componente es de ejemplo y solo sirve para marcar sitios en el layout.
 */
export const Ranking = ({}) => {

    const [category, setCategory] = useState([])

    return (
        <div className="ranking">
            Primer intento
            <div className="ranking_filter">
                <Filter category={category} setCategory={setCategory}/>
            </div>
            <div className="ranking__table">
                <Table/>
            </div>    
        </div>
    )
}