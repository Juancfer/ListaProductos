import React from "react";
import './ProductDetail.css'
import { useParams } from 'react-router-dom';
import { products } from "../../ProductList";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";

const ProductDetail = (props) => {
    let { id } = useParams();
    const authInfo = React.useContext(AuthContext);

    const handleOnCLick = () => props.userProfile({ user: authInfo.user, favProduct: products[id].name })
    
    return(
        <div className="productDetail">
            <img src={products[id].image}></img>
            <p>{products[id].name}</p>
            <p>{products[id].price}</p>
            <p>{products[id].description}</p>
            <Link 
                to="/my-account"
                onClick={handleOnCLick}
            >Marcar como favorito</Link>
        </div>
    )
}

export default ProductDetail