import React from 'react';

let Product = ({products}) => {
  return (
    <div>
      <h3>Lista de productos: </h3>
      <h5>Cantidad total de productos en DB: {products.length}</h5>
      <ul className="list-unstyled">
        {products.map((product, i) => (
          <li key={i} className="my-3 p-3">
            <p>
              <strong>id:</strong> {product.id}
            </p>
            <p>
              <strong>nombre:</strong> {product.name}
            </p>
            <p>
              <strong>precio:</strong> {product.price} ARS$
            </p>
            <p>
              <strong>descuento:</strong> {product.discount}%
            </p>
            <img src={product.background_image} alt={product.name} className="w-50" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;