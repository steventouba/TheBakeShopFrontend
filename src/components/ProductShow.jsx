import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ProductShow(props) {
  const [product, setProduct] = useState(null);
  // const { resource } = props.location.state;

  useEffect(() => {
    Axios.get("/products/1")
      .then((res) => setProduct(res.data))
      .catch((console.log))
  }, [])

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