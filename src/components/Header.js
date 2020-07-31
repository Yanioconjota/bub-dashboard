import React from 'react';
import logo from '../logo.svg';

let Header = (props) => {
  return (
    <header>
      <div className="container">
        <nav className="d-flex align-items-center">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React Dashboard {props.name}</p>
        </nav>
      </div>
    </header>
  );
}

export default Header;