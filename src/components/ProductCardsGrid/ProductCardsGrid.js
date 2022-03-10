
import React from "react";
import ProductCard from "../ProductCard/ProductCard";


function ProductCardsGrid(props) {
const {data, col} =props;
const cardCols= data.length !== 0 && data.map ((product, index) =>{
    return (
        <div className="col pb-2" key={index}>
            <ProductCard
            id={product.id}
            name={product.name}
            category={product["product_type"]}
            price={product.price}
            image={product["image_link"]}
            color={product["product_colors"]}
            />

        </div>

    );
})

    return (
        <div className={`row
        row-cols-${col.xs}
        row-cols-sm-${col.sm}
        row-cols-md-${col.md}
        row-cols-lg-${col.lg}
        row-cols-xl-${col.xl}
        `}>
            {cardCols}
        </div>
    );
}

export default ProductCardsGrid;