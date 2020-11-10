import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ProductIndex() {
  const [products, setProducts] = useState(null);

  useEffect(() => { 
    Axios.get('/products/')
      .then((res) => setProducts(res.data))
  },[])

  const component = products === null ? <div>Loading</div>
    : <ul>
      { products.map((product) => <li>{product.name}</li>) }
    </ul>

    return(
      <section>
        {component}
      </section>
    )
}
export default ProductIndex;
