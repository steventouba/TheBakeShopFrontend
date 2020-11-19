import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/authContext';

function Navbar() {
  const { userDetails, setAuth } = useContext(AuthContext);
  const {isAuthenticated, firstName } = userDetails;

  const logout = () => { 
    localStorage.removeItem('savedToken');
    setAuth()
  };

  if (isAuthenticated) {
    return (
      <nav>
        <span>
          {`Hello ${firstName}`}
        </span>
        <button onClick={logout}>Sign out</button>
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
