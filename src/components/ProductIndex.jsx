import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import styles from '../stylesheets/ProductCard.module.css';

function ProductIndex() {
  const [products, setProducts] = useState(null);

  useEffect(() => { 
    Axios.get('/products/')
      .then((res) => setProducts(res.data))
  },[])

  const component = products === null ? <div>Loading</div> : 
    <ul className={styles.gallery__list}>
      {
        products.map(product => (
          <div key={product.id} className={styles.card}>
            <Link to={`/products/${product.id}`}>
              <img src={product.resources.image} alt="Image goes here"/>
               <h3>{product.name}</h3>
            </Link>
          </div>
        ))
      }
    </ul>

    return(
      <main>
        {component}
      </main>
    )
}
export default ProductIndex;
