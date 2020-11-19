import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ProductShow({location, match, history}) {
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

  const component = product === null ? <div>Loading</div>
    : <div>
      <div>{product.name}</div>
      <div>{product.description}</div>
    </div>;

  return (
    <section>
      {component}
    </section>
  )
}
export default ProductShow;