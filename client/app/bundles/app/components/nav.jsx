import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = ({ handleOnLogout, uid }) => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Svitla Challenge App</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                {
                    uid ? 
                        <div>
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/products" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Products</Link>
                                </li>
                                <li>
                                    <Link to="/cart" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Cart</Link>
                                </li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#" onClick={ handleOnLogout }>Logout</a></li>
                            </ul> 
                        </div>
                        : ''
                }
            </div>
        </div>
    </nav>
);

export default Nav;