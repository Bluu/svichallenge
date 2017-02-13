import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startLogout } from '../actions/user-auth-actions';
import { startAddCartProducts, startGetCartProducts, startDeleteCartProducts } from '../actions/cart-actions';
import Cart from '../components/cart';

class CartContainer extends Component {
    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(startGetCartProducts());
    }

    onDelete(event, cartProductID) {
        event.preventDefault();

        const { dispatch } = this.props;

        dispatch(startDeleteCartProducts(cartProductID));
    }

    render() {
        const { products, cartProducts } = this.props;

        return (
            <div>
                <Cart products={ products } cartProducts={ cartProducts } handleOnDelete={ this.onDelete }/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    uid: state.authReducer.uid, 
    products: state.productsReducer.products,
    cartProducts: state.cartReducer.cartProducts
});

export default connect(mapStateToProps)(CartContainer);