import React, { PropTypes } from 'react';

const Cart = ({ products, cartProducts, handleOnDelete }) => {
    return (
        <div>
            <h1>Cart</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {   
                        cartProducts ? cartProducts.map(cartProduct => {
                            var product = products? products.find(product => product.id === cartProduct.product_id) : {};

                            return (
                                <tr key={ cartProduct.id }>
                                    <td>{ product.name }</td>
                                    <td>{ product.brand }</td>
                                    <td>{ product.model }</td>
                                    <td>{ product.price }</td>
                                    <td><button className="btn btn-danger" onClick={ (event) => handleOnDelete(event, cartProduct.id) }>Delete</button></td>
                                </tr>
                            );
                        }) : ''
                    }
                </tbody>
            </table>
                
        </div>
    );
};

Cart.propTypes = {
    handleOnDelete: PropTypes.func,
    products: PropTypes.array,
    cartProducts: PropTypes.array,
};

export default Cart;