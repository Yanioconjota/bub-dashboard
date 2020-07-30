import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { name: 'GTAV', price: 4000 },
        { name: 'The Witcher 3', price: 1500 },
        { name: 'Red Dead Redemption 2', price: 5000 },
      ]
    }
  }
  render() {
    return (
      <Product products={this.state.products}/>
    );
  }
}

export default Products;