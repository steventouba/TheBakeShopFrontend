import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ProductCreateForm from './ProductCreateForm';

function UserShow(props) {
  const [user, setUser] = useState(null);
  const { resourceUrl } = props.location.state;

  debugger
  useEffect(() => {
    Axios.get(resourceUrl)
      .then((res) => setUser(res.data))
      .catch((console.log))
  },[])

  const component = user === null ? <div>Loading</div>
    : <div>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <div>{user.email}</div>
      <ul>{user.products.map((product) => <li>{product.name}</li>)}</ul>
    </div>;

  return (
    <section>
      {component}
      <ProductCreateForm />
    </section>
  )
}
export default UserShow;