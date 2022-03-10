import React from "react";
import { Table } from "reactstrap";
import style from "./ProductTable.module.css";
import { NavLink } from "react-router-dom";

function ProductTable(props) {
    const { data } = props;

    const tableRows = data.map((product) => {
        return (
            <tr  key={data && product.id}>

                <td  className={`${style.image}`}>
                    <img src={product.image_link} alt={data && product.name} />
                </td>

                <td className={`pt-3 ${style.name}`}> {product.name}

                </td>

                <td className={`pt-3 ${style.category}`}>{product.product_type}</td>

                <td className={`pt-3 ${style.category}`}>{product.price}$</td>

                <td>
                    <NavLink to={`/product/${product.id}`}>
                        <button className={`p-1 mt-1 btnPrice`}> show product  </button>
                    </NavLink>
                </td>
            </tr>
        );
    });

    return (
        <div className={`px-4 py-3 mb-4 ${style.tablebgd}`}>
        <Table responsive>
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th> Details </th>

            </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </Table>
        </div>
    );
}

export default ProductTable;