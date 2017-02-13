import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { startLogout } from '../actions/user-auth-actions';
import { startGetProducts } from '../actions/products-actions';
import { startAddCartProducts } from '../actions/cart-actions';
import Products from '../components/products';

class ProductsContainer extends Component {
    constructor() {
        super();
        this.onLogout = this.onLogout.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(startGetProducts());
    }

    onLogout() {
        const { dispatch } = this.props;

        dispatch(startLogout());
    }

    onSubmit(event) {
        event.preventDefault();

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
                <button onClick={ this.onSubmit }>submit</button>
                <Link to="/cart">Cart</Link>
                <Products products={ products } handleOnLogout={ this.onLogout } handleOnAddToCart={ this.onAddToCart }/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ products: state.productsReducer.products });

export default connect(mapStateToProps)(ProductsContainer);