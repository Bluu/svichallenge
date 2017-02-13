import React, { PropTypes } from 'react';

const Login = ({ handleOnLogin }) => {
  return (
    <div>
        <h1>Svitla Challenge App</h1>
        <h3>Login</h3>
        <button onClick={ handleOnLogin }>Login</button>
    </div>
  )
};

Login.propTypes = {
  handleOnLogin: PropTypes.func.isRequired,
};

export default Login;
