import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function UserShow(props) {
  const [user, setUser] = useState(null);
  const { resource } = props.location.state;

  useEffect(() => {
    Axios.get('resource')
      .then((res) => setUser(res.data))
      .catch((console.log))
  },[resource])

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
    </section>
  )
}
export default UserShow;