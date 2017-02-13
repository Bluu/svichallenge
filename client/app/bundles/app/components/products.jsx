import React, { PropTypes } from 'react';

const Products = ({ products, handleOnAddToCart }) => {
    let selectedProduct = { name: 'test'};
    
    return (
        <div>
            <h1>Products Page</h1>
            <div className="row">
                {   
                    products ? products.map(product => {
                        return (
                            <div className="col-md-4" key={ product.id }>
                                <a href="#" className="thumbnail" onClick={ 
                                        (event) => {
                                            selectedProduct = product; 
                                            document.getElementById("modalProductName").innerHTML = `Name: ${selectedProduct.name}`;
                                            document.getElementById("modalProductBrand").innerHTML = `Brand: ${selectedProduct.brand}`;
                                            document.getElementById("modalProductModel").innerHTML = `Model: ${selectedProduct.model}`;
                                            document.getElementById("modalProductPrice").innerHTML = `Price: ${selectedProduct.price}`;
                                            document.getElementById("modalProductDescription").innerHTML = `Description: ${selectedProduct.desc}`;
                                        }  
                                    }  data-toggle="modal" data-target="#myModal">
                                    <span>Name: { product.name }</span><br/>
                                    <span>Brand: { product.brand }</span><br/>
                                    <span>Model: { product.model }</span><br/>
                                    <span>Price: { product.price }</span>
                                </a>
                            </div>
                        );
                    }) : ''
                }
            </div>

            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">Product Information</h4>
                </div>
                <div className="modal-body">
                    <span id="modalProductName"></span><br/>
                    <span id="modalProductBrand"></span><br/>
                    <span id="modalProductModel"></span><br/>
                    <span id="modalProductPrice"></span><br/>
                    <span id="modalProductDescription"></span>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={ (event) => handleOnAddToCart(event, selectedProduct.id) }>Add to Cart</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.array,
    handleOnAddToCart: PropTypes.func.isRequired,
};

export default Products;