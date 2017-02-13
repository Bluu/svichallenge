import React, { PropTypes } from 'react';

const Products = ({ handleOnLogout, products }) => {
    return (
        <div>
            <button onClick={ handleOnLogout }>Logout</button>
            <ul>
                {   
                    products ? products.map(product => {
                        return (
                            <li key={ product.id }>
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
  handleOnLogout: PropTypes.func.isRequired,
};

export default Products;