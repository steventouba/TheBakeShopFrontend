import { Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage';
import ProductShow from './components/ProductShow';
import UserIndex from './components/UserIndex';
import UserShow from "./components/UserShow";
import SignupForm from "./components/forms/SignUpForm";
import LogInForm from "./components/forms/LoginForm";
import Navbar from "./components/NavBar";
import ErrorPage from './components/NoMatch';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products/:id" exact render={(props) => <ProductShow {...props} />} />
        <Route path="/users/:id" exact component={UserShow} />
        <Route path="/users" exact component={UserIndex} />
        <Route path="/login" exact component={LogInForm} />
        <Route path="/signUp" exact component={SignupForm} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
