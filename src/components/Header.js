import React from 'react';
import logo from '../logo.svg';

let Header = (props) => {
  return (
    <header className="d-flex align-items-center">
      <img src={logo} className="App-logo" alt="logo" />
      <p>React Dashboard {props.name}</p>
    </header>
  );
}

export default Header;