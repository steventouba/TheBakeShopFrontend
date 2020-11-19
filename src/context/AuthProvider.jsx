import React, { useEffect, useState } from 'react';
import AuthContext from './authContext';

function AuthProvider({ children }) {
  const [userDetails, setUserDetails] = useState({isAuthenticated: false, firstName: ''});
  
  const setAuth = (firstName = '') => {
    if (localStorage.getItem('savedToken')) {
      setUserDetails({isAuthenticated: true, firstName});
    } else {
      setUserDetails({isAuthenticated: false, firstName});
    }
  };
  
  const checkAuth = useEffect(() => setAuth(), [])
  const context = { userDetails, setAuth };

  return (
    <AuthContext.Provider value={ context } >
      { children }
    </AuthContext.Provider>
  )
};

export default AuthProvider;
