import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/authContext';

const WithAuth = (WrappedComponent) => (

  function AuthWrapper() {
    const { userDetails } = useContext(AuthContext);
    const { isAuthenticated } = userDetails;

    if (isAuthenticated) {
      return (
        <WrappedComponent /> 
      )
    } else {
      return (
        <div>
          You need to login to view this content. 
          <Link to='/login'>Go to Log In</Link>
        </div>
      )
    }
  }
)
 
export default WithAuth;
