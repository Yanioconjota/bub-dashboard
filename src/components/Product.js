import React from 'react';

let Product = ({products}) => {
  return (
    <div>
      <h3>Lista de productos: </h3>
      <ul className="list-unstyled">
        {products.map((product, i) => (
          <li key={i} className="my-3 p-3">
            <p>
              <strong>nombre:</strong> {product.name}
            </p>
            <p>
              <strong>precio:</strong> {product.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;