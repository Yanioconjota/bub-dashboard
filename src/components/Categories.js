import React, { Component } from 'react';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: {},
      countBycat: {}
    }
  }
  apiCall(url, handler) {
    fetch(url)
      .then(response => response.json())
      .then(response => handler(response))
      .catch(err => console.log(err))
  }

  showCategories = (response) => {
    console.log(response);
    this.setState({
      categories: response.meta,
      countBycat: response.meta.getCountByCategory
    });
  }

  componentDidMount() {
    console.log("Component mounted!");
    this.apiCall('http://localhost:5555/api/products/', this.showCategories);
  }

  componentDidUpdate() {
    console.log("Component updated!");
  }
  render() {
    return (
      <div>
        <h3>Categorías</h3>
        <h5>Total de categorías en la DB: {this.state.categories.totalCategories} </h5>
        <ul className="list-unstyled">
          {Object.keys(this.state.countBycat)
            .map( (key, index) => {
              return <li key={key}>
                      <strong>{key}</strong> {this.state.countBycat[key]}
                    </li>
          })}
        </ul>
      </div>
    );
  }
}

export default Categories;
