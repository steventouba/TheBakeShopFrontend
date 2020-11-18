import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context';

function Navbar() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return (
      <nav>
        <span>
          welcome
        </span>
        <Link to='/'>Products</Link>
        <Link to='/users'>Sellers</Link>
      </nav>
    )
  } else {
    return (
      <nav>
        <Link to='/login'>login</Link>
        <Link to='/signup'>signup</Link>
        <Link to='/'>Products</Link>
        <Link to='/users'>Sellers</Link>
      </nav>
    )
  }


};

export default Navbar;
