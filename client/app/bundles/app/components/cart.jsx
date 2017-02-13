import React, { PropTypes } from 'react';

const Cart = ({ products, cartProducts, handleOnDelete }) => {
    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {   
                    cartProducts ? cartProducts.map(cartProduct => {
                        var product = products? products.find(product => product.id === cartProduct.product_id) : {};

                        return (
                            <li key={ cartProduct.id }>
                                <p>{ product.name }</p>
                                <p>{ product.brand }</p>
                                <p>{ product.model }</p>
                                <p>{ product.price }</p>
                                <button onClick={ (event) => handleOnDelete(event, cartProduct.id) }>Delete</button>
                            </li>
                        );
                    }) : ''
                }
            </ul>
        </div>
    );
};

Cart.propTypes = {
    handleOnDelete: PropTypes.func,
    products: PropTypes.array,
    cartProducts: PropTypes.array,
};

export default Cart;