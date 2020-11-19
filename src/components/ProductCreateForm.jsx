import React, { useState } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

function ProductCreateForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, description, };
    const instance = Axios.create({
      headers: { Authorization: localStorage.getItem('savedToken' )},
      data
    })

    instance.post('/products/create', data)
      .then(res => setProduct(res.data))
      .catch(console.log)
  };

  if (product != null) { return <Redirect to={{pathname: `/products/${product.id}`, state: {product}}}/>} 
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product-name"></label>
      <input
        type="text"
        name="product-name"
        id="product-name" 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="product-description"></label>
      <input
        type="text-area"
        name="product-description"
        id="product-description"
        value={description}
        onChange={e => setDescription(e.target.value)}  
      />
      <button type="submit">Create Product</button>
    </form>
  )
}

export default ProductCreateForm;
