import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startLogout } from '../actions/user-auth-actions';
import { startGetProducts } from '../actions/products-actions';
import Products from '../components/products';

class ProductsContainer extends Component {
    constructor() {
        super();
        this.onLogout = this.onLogout.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
    //   var p = {
    //       name: 'test', 
    //       brand: 'test', 
    //       model: 'test', 
    //       sku: 'test', 
    //       price: 2, 
    //       desc: 'test'
    //   };
    //   $.post('/products', { product: p }, (data) => {
    //       console.log('success', data);
    //   }, 'JSON');

    //   $.get('/products', {}, (data) => {
    //       console.log('success', data);
    //   }, 'JSON');
        const { dispatch } = this.props;
        dispatch(startGetProducts());
    }

    render() {
        const { products } = this.props;

        return (
            <div>
                <button onClick={ this.onSubmit }>submit</button>
                <Products handleOnLogout={ this.onLogout } products={ products }/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ products: state.productsReducer.products });

export default connect(mapStateToProps)(ProductsContainer);