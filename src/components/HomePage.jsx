import React, { useContext } from 'react';
import AuthContext from '../context';
import ProductShow from './ProductShow';

function HomePage() {
  const context = useContext(AuthContext);

  return (
    <div>
      <ProductShow />
      <div>
        { context.isAuthenticated }
      </div>
      <button onClick={context.setAuth}>Test</button>
    </div>
  )
}

export default HomePage;