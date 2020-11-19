import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ProductShow({ location, match }) {
  const { state } = location;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (state != undefined) {
      setProduct(state.product)
    } else {
      const { id } = match.params;
      Axios.get(`/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((console.log))
    }
  }, [state, match.params])

  const component = product === null ? <div>Loading</div> :
    <main className="container">
      <div className="left-column">
        product image 
      </div>
      <div className="right-column">
        <div className="product-description">
          <span>Category</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <div className="product-price">
          <span>product price</span>
          <button className="cart-btn">Add to cart</button>
        </div>
      </div>
    </main>

  return component
};

export default ProductShow;
