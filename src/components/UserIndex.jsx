import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function UserIndex() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    Axios.get('/users/')
      .then((res) => setUsers(res.data))
  }, [])

  const component = users === null ? <div>Loading</div>
    : <ul>
      {users.map((user) => (
        <li>
          <Link to={{
            pathname: `users/${user.id}`,
            state: {
              resource: user.self,
            }
          }}>
            {user.firstName + " " + user.lastName}
          </Link>
        </li>
        ))}
    </ul>

  return (
    <section>
      {component}
    </section>
  )
}
export default UserIndex;