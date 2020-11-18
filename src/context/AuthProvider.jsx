import React, { useState } from 'react';
import AuthContext from './index';

function AuthProvider({ children }) {
const [isAuthenticated, setAuthenticated] = useState("hello");
  
  const setAuth = () => {
    if (localStorage.getItem('savedToken')) {
      setAuthenticated(true);
    } else {
      setAuthenticated("boo") 
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
