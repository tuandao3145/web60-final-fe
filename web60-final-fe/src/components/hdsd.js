import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export default function Hdsd () {

    const product = useContext(ProductContext);

    return (
        <ul>
            {product.allCategory?.map(item => <li key={item._id}>
                <Link to={'/category/' + item._id}>{item.name}</Link>
            </li>)}
        </ul>
    )
}