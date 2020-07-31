import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }
  apiCall(url, handler) {
    fetch(url)
      .then(response => response.json())
      .then(response => handler(response))
      .catch(err => console.log(err))
  }

  showProduct = (response) => {
    console.log(response);
    this.setState({
      products: response.data
    });
  }

  componentDidMount() {
    console.log("Component mounted!");
    this.apiCall('http://localhost:5555/api/products/', this.showProduct);
  }

  componentDidUpdate() {
    console.log("Component updated!");
  }
  render() {
    return (
      <Product products={this.state.products}/>
    );
  }
}

export default Products;