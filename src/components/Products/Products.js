import React from "react"
import './Products.css';
import { products } from "../../ProductList";
import { Link } from "react-router-dom";

const Products = () => {
 
    return (
        <div className="product">
            {products.map(product => {
                return (
                    <div className="product-info" key={product.id}>
                        <img className="product-img" src={product.image}></img>
                        <p className="product-title">{product.name}</p>
                        <Link to={`/product-detail/${product.id}`}>Ver producto</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Products