import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ProductShow(props) {
  debugger
  const { location } = props;
  const [product, setProduct] = useState(location.state.product);

  // useEffect(() => {
  //   Axios.get("/products/1")
  //     .then((res) => setProduct(res.data))
  //     .catch((console.log))
  // }, [])

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