import { Route, Switch, Redirect, Link } from "react-router-dom";
import HomePage from './components/HomePage';
import ProductShow from './components/ProductShow';
import UserIndex from './components/UserIndex';
import UserShow from "./components/UserShow";
import SignupForm from "./components/SignUpForm";
import LogInForm from "./components/LoginForm";

import './App.css';
import { useState } from "react";



function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Products</Link>
        <Link to='/users'>Sellers</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products/:id" exact component={ProductShow} />
        <Route path="/users/:id" exact component={UserShow} />
        <Route path="/users" exact component={UserIndex} />
        <Route path="/login" exact component={LogInForm} />
        <Route path="/signUp" exact component={SignupForm} />
      </Switch>
    </div>
  );
}

export default App;
