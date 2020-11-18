import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

function LogInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username: email, password, }
    Axios.post("/users/login", data)
      .then(
        res => {
          Axios.defaults.headers.common['Authorization'] = "Bearer: " + res.data
          localStorage.setItem("savedToken", res.data)
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