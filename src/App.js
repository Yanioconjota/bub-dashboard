import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import Products from './components/Products';
import Categories from './components/Categories';
import './scss/App.scss';

function App() {
  
  return (
    <div>
      <Header name="BuB"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <Users />
          </div>
          <div className="col-12 col-lg-4">
            <Products/>
          </div>
          <div className="col-12 col-lg-4">
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
