import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/authContext';
import styles from '../stylesheets/NavBar.module.css'

function Navbar() {
  const { userDetails, setAuth } = useContext(AuthContext);
  const {isAuthenticated, firstName } = userDetails;

  const logout = () => { 
    localStorage.removeItem('savedToken');
    setAuth()
  };

  if (isAuthenticated) {
    return (
      <nav className={styles.container}>
        <span>
          {`Hello ${firstName}`}
        </span>
        <button onClick={logout}>Sign out</button>
        <Link to='/'>Home</Link>
        <Link to='/users'>Sellers</Link>
      </nav>
    )
  } else {
    return (
      <nav className={styles.container}>
        <Link to='/login'>login</Link>
        <Link to='/signup'>signup</Link>
        <Link to='/'>Home</Link>
        <Link to='/users'>Sellers</Link>
      </nav>
    )
  }


};

export default Navbar;
