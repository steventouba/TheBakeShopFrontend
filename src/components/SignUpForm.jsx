import { render } from '@testing-library/react';
import React from 'react';


function SignupForm extends React.Component {
  constructor(props) {
    this.state = {
      firstName: "", 
      lastName: "",
      email: "", 
      password: "",
      matchingPassword: "",
    }
  }


  render() {
    const { firstName, lastName, email, password, matchingPassword } = this.state;

    <form onSubmit={ this.handleSumbit }>
      <label for="fname">First name:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="John"
        value={firstName}
      />
      <label for="lname">Last name:</label>
      <input
        type="text"
        id="lname"
        name="lname" 
        value={lastName}
      />
      <label htmlFor="email"></label>
      <input 
        type="email"
        id="email"
        name="email"
        value={email}
      />
      <label for="password">Password:</label><br>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
      />
      <label for="password-match">Confirm Password:</label><br>
        <input
          type="password"
          id="password"
          name="password-match"
          value={matchingPassword}
        />
        <button type="submit">Sign up</button>
    </form>
  }
}