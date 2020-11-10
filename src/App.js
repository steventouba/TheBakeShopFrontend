import { Route, Switch, Redirect, Link } from "react-router-dom";
import ProductIndex from './components/ProductIndex';
import ProductShow from './components/ProductShow';
import UserIndex from './components/UserIndex';
import UserShow from "./components/UserShow";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Products</Link>
        <Link to='/users'>Sellers</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={ProductIndex} />
        <Route path="/products/:id" exact component={ProductShow} />
        <Route path="/users/:id" exact component={UserShow} />
        <Route path="/users" exact component={UserIndex} />
      </Switch>
    </div>
  );
}

export default App;
