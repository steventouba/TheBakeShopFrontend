import React, { useContext, useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/authContext';

function LogInForm(props) {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username: email, password, }
    Axios.post("/users/login", data)
      .then(
        res => {
          const {data, headers } = res;
          localStorage.setItem("savedToken", headers.authorization)
          setAuth(data)
        })
      .then(history.push("/"))
      .catch(console.log)
  };

  return (
    <form onSubmit={handleSubmit}>
   
      <label htmlFor="email"></label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={event => setPassword(event.target .value)}
      />
      <br />
      <button type="submit">login</button>
    </form>
  
  )
}

export default LogInForm;