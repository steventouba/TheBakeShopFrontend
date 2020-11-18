import React, { useState } from 'react';
import AuthContext from './index';

function AuthProvider({ children }) {
const [isAuthenticated, setAuthenticated] = useState(false);
  
  const setAuth = () => {
    if (localStorage.getItem('savedToken')) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }

  const context = { isAuthenticated, setAuth }

  return (
    <AuthContext.Provider value={ context } >
      { children }
    </AuthContext.Provider>
  )
};

export default AuthProvider;
