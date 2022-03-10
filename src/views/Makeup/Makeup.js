import React, {useState} from "react";
import ProductTable from "../../components/ProductTable/ProductTable";
import ProductCardsGrid from "../../components/ProductCardsGrid/ProductCardsGrid";
import style from "./Makeup.module.css";

function Makeup (props) {
    const {data, image } =props;
    const [displayGrid, setDisplayGrid] = useState("true");

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <div className={style.switch}>
                        <div
                            className={`${style.option} ${displayGrid ? style.active : null}`}
                            onClick={() => setDisplayGrid(true)}
                        >
                            Grid
                        </div>

                        <div
                            className={`${style.option} ${!displayGrid ? style.active : null}`}
                            onClick={() => setDisplayGrid(false)}
                        >
                            Table
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col">
                    {displayGrid ? <ProductCardsGrid data={data} col={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}/> : <ProductTable image={image} data={data}/>}
                </div>
            </div>
        </div>
    )
}

export default Makeup;