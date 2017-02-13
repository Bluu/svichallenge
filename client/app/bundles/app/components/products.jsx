import React, { PropTypes } from 'react';

const Products = ({ products, handleOnLogout, handleOnAddToCart }) => {
    return (
        <div>
            <button onClick={ handleOnLogout }>Logout</button>
            <ul>
                {   
                    products ? products.map(product => {
                        return (
                            <li key={ product.id } onClick={ (event) => handleOnAddToCart(event, product.id) }>
                                <p>{ product.name }</p>
                                <p>{ product.brand }</p>
                                <p>{ product.model }</p>
                                <p>{ product.price }</p>
                            </li>
                        );
                    }) : ''
                }
            </ul>
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.array,
    handleOnLogout: PropTypes.func.isRequired,
    handleOnAddToCart: PropTypes.func.isRequired,
};

export default Products;