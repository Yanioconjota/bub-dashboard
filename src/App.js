import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import Products from './components/Products';
import './scss/App.scss';

function App() {
  let usuarios = [
    {name: 'Morgan', mail: 'morgancitoelperro@gmail.com'},
    {name: 'Milo', mail: 'mililuli@gmail.com'},
    {name: 'Negro', mail: 'perronegrooficial@gmail.com'},
  ];
  
  return (
    <div>
      <Header name="BuB"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Users />
          </div>
          <div className="col-12 col-lg-6">
            <Products/>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default App;
