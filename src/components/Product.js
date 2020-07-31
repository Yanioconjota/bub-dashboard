import React from 'react';
import Categories from './Categories';

let Product = ({products}) => {
  let toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let finalPrice = (price, discount) => {
    if (discount > 0) {
      price = price - (price * discount / 100);
    } else {
      price = price;
    }
    return toThousand(price);
  }
  return (
    <div>
      <h4>Productos: </h4>
      <div className="row">
        <div className="card col">
          <p>Cantidad total de productos en DB: {products.length}</p>
          <hr/>
          <ul className="list-unstyled">
          {
            products.map((product, i)=>(
              <li key={i}><small>{product.name}</small></li>
            ))
          }
          </ul>
        </div>
        <div className="card col">
          <Categories/>
        </div>
      </div>
      <div className="custom-row">
        {products.map((product, i) => (
          <div className="card-wrapper">
            <div key={i} className="card">
              <div className="card-img" style={{backgroundImage: 'url('+ product.background_image + ')'}}>
                <p className="card-title">{product.name}</p>
              </div>
              <div className="card-body">
                <div className="price">
                  {product.discount > 0 &&
                    <div className="value">
                      <p>
                        <span className="badge badge-primary mr-2">-{product.discount}%</span>
                        {finalPrice(product.price, product.discount)} ARS$
                      </p>
                      <div className="discount">
                        <small>{product.price} ARS$</small>
                      </div>
                    </div>
                  }
                  {product.discount === 0 &&
                    <div className="value alt">
                      <p>
                        {finalPrice(product.price, product.discount)} ARS$
                      </p>
                    </div>
                  }
                  <span className="product-id">{product.id}</span>
                </div>
                <p className="legend">
                  <small>Disponible para:</small>
                </p>
                {
                  product.stores.map((store, i)=>(
                    <span>
                      {
                        store.name === 'Steam' && 
                        <i className="icon-steam"></i>
                      }
                      {
                        store.name === 'X-Box Store' && 
                        <i className="icon-xbox"></i>
                      }
                      {
                        store.name === 'GOG' && 
                        <i className="icon-gog"></i>
                      }
                      {
                        store.name === 'Epic Games' && 
                        <i className="icon-epic"></i>
                      }
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;