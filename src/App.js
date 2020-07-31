import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import Products from './components/Products';
import './scss/App.scss';

function App() {
  
  return (
    <div>
      <Header name="BuB"/>
      <div className="container">
        <Products />
      </div>
      <div className="container">
        <hr className="my-5"/>
        <Users className="row" />
      </div>
    </div>
  );
}

export default App;
