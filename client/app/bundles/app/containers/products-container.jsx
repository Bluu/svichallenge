import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startGetProducts } from '../actions/products-actions';
import { startAddCartProducts } from '../actions/cart-actions';
import Products from '../components/products';

class ProductsContainer extends Component {
    constructor() {
        super();
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(startGetProducts());
    }

    onAddToCart(event, product_id) {
        event.preventDefault();

        const { dispatch } = this.props;
        dispatch(startAddCartProducts(product_id));
    }

    render() {
        const { products } = this.props;

        return (
            <div>
                <Products products={ products } handleOnAddToCart={ this.onAddToCart }/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ products: state.productsReducer.products });

export default connect(mapStateToProps)(ProductsContainer);