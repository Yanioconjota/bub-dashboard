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
    <div className="container">
      <div className="row">
        <Header name="BuB"/>
        <div className="col-12">
          <Users />
        </div>
      </div>
      <Products/>
    </div>
    
    
  );
}

export default App;
