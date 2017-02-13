import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/user-auth-actions';
import Login from '../components/user-auth';

export class LoginContainer extends Component {
    constructor() {
        super();
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin() {
        const { dispatch } = this.props;

        dispatch(startLogin());
    }

    render() {
        return (
            <Login handleOnLogin={ this.onLogin }/>
        );
    }
}

export default connect()(LoginContainer);
