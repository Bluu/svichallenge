import React, { PropTypes } from 'react';

const Login = ({ handleOnLogin }) => {
  return (
    <div>
        <h1>Svitla Challenge App</h1>
        <button className="btn btn-primary" onClick={ handleOnLogin }>Login with Github</button>
    </div>
  )
};

Login.propTypes = {
  handleOnLogin: PropTypes.func.isRequired,
};

export default Login;
