import React from 'react';
import logo from '../logo.svg';

let Header = (props) => {
  return (
    <header>
      <div className="container">
        <nav className="d-flex align-items-center">
          <i className="icon-bub text-sunflower App-logo"></i>
          <p className="brand"><span>{props.name}</span> React Dashboard</p>
        </nav>
      </div>
    </header>
  );
}

export default Header;