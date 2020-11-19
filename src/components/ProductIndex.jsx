import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function ProductIndex() {
  const [products, setProducts] = useState(null);

  useEffect(() => { 
    Axios.get('/products/')
      .then((res) => setProducts(res.data))
  },[])

  const component = products === null ? <div>Loading</div> : 
    <ul className="product-card-container">
      {
        products.map(product => (
          <li key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src="" alt="Image goes here"/>
               <h3>{product.name}</h3>
            </Link>
          </li>
        ))
      }
    </ul>

    return(
      <section>
        {component}
      </section>
    )
}
export default ProductIndex;
