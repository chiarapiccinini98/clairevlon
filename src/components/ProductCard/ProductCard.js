import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import style from "./ProductCard.module.css";
import { NavLink } from "react-router-dom";

function ProductCard(props) {
    const { id, name, category, price, image} = props;

    return (
        <div className={"h-100"}>
            <NavLink to={`/product/${id}`}>
                <Card className={`h-100 ${style.borderCard}`}>
                    <CardImg className="w-50 p-3 align-self-center" src={image} />
                    <CardBody className="d-flex flex-column justify-content-end text-centered">
                        <CardTitle
                            className={`${style.titleCard}`}
                        >
                            {name}
                        </CardTitle>
                        <div className="d-flex justify-content-between">
                            <CardText className={`${style.subtitleCard}`}>{category}</CardText>
                            <CardText className={`${style.price}`}>{price}$</CardText>
                        </div>
                    </CardBody>
                </Card>
            </NavLink>
        </div>
    );
}

export default ProductCard;