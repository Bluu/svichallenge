import React from 'react';

import NavContainer from '../containers/nav-container';

const Main = ({ children }) => {
  return (
    <div>
        <NavContainer/>
        <div className="container">
            { children }
        </div>
    </div>
  );
};

export default Main;