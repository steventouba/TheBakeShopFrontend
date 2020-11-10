import { Route, Switch, Redirect } from "react-router-dom";
import ProductShow from './components/ProductShow';
import UserIndex from './components/UserIndex';
import UserShow from "./components/UserShow";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ProductShow} />
        <Route path="/users" exact component={UserIndex} />
        <Route path="/users/:id" exact component={UserShow} />
      </Switch>
    </div>
  );
}

export default App;
