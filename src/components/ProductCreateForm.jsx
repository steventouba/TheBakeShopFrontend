import React, { useState } from 'react';
import Axios from 'axios';

function ProductCreateForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, description, };
    const instance = Axios.create({
      headers: { Authorization: localStorage.getItem('savedToken' )},
      data
    })

    instance.post('/products/create', data)
      .then(res => console.log(res.data))
      .catch(console.log)
  };

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
