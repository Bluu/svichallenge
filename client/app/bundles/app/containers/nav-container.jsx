import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startLogout } from '../actions/user-auth-actions';
import Nav from '../components/nav';

class NavContainer extends Component {
    constructor() {
        super();
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        const { dispatch } = this.props;

        dispatch(startLogout());
    }

    render() {
        const { uid } = this.props;

        return (
            <div>
                <Nav uid={ uid } handleOnLogout={ this.onLogout }/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ uid: state.authReducer.uid });

export default connect(mapStateToProps)(NavContainer);