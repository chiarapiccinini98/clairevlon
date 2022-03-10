import React from "react";
import {useParams} from "react-router-dom/cjs/react-router-dom";
import style from "./MakeupDetail.module.css";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCardsGrid from "../../components/ProductCardsGrid/ProductCardsGrid";
import {Link} from "react-router-dom";


const MakeupDetail = (props) => {
    const { data } = props;

    const params = useParams();
    const id = parseInt(params.number);
    const currentProduct = data.filter((product) => product.id === id) [0];
    const similarProduct = data.filter( (product) => product["product_type"] === currentProduct["product_type"]);
    const otherProduct = similarProduct.filter((product) => product.id !== currentProduct.id) ;
    let colorPills;
    if(currentProduct){
        colorPills = currentProduct.product_colors.map((color, index)=>{
            return (
                <>
                    <div id={index} className={`${style.pill} ${style.tooltip}`} style={{backgroundColor: color.hex_value}}>
                        {" "}
                        <span className={style.tooltiptext}>{color.colour_name}</span>
                    </div>
                </>

            )
        });
    }



    return (
        <div className="container p-4 p-md-5 mt-5">
                    {currentProduct &&
                    (
                        <div className={"row g-md-5 justify-content-around "}>
                            <div className={`col-12 col-md-4 d-flex justify-content-center h-auto py-4 ${style.imgbgd}`}>
                                <img src={currentProduct["image_link"]}/>
                            </div>
                            <div className={"col-12 col-md-7 mt-3 mt-md-0"}>
                                <h1 className={style.nametitle}> {currentProduct.name}</h1>
                                <p> {currentProduct.description}</p>
                                <p className={"h4  mb-3"}> <span className={"subtitleBold"}> Category:  </span>   {currentProduct.product_type}</p>

                                {colorPills.length !== 0 && (
                                    <>
                                    <p className={"subtitleBold"}> Variants: </p>
                                    <div className="mt-1">{colorPills} </div>
                                    </>
                                )}
                                <div className={"d-flex justify-content-between mt-3"}>
                                    <p className={"h4 mb-3"}> <span className={"subtitleBold"}> Price:  </span>   {currentProduct.price}$</p>
                                    <a className="btnPrice px-4 py-2" href={currentProduct.product_link}>buy</a>
                                </div>
                            </div>
                        </div>
                    )}
            <div>
                {otherProduct.length !== 0 && (
                    <div className={"mt-5"}>
                        <h2 className={"textdark"}> Similar products: </h2>
                        <ProductCardsGrid data={otherProduct} col={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}/>

                    </div>
                )}

            </div>
            <div className={"mt-5 st"}>
                <Link
                    to="/makeup"
                    id={"turnback"}
                    className="back"
                >
                    All product
                </Link>
            </div>



        </div>
    )
}

export default MakeupDetail;