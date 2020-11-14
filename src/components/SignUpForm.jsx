import React from 'react';
import Axios from 'axios';


class SignupForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      matchingPassword: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = Object.assign({}, this.state)
    Axios.post("/users/register", data)
      .then((res) => console.log(res.data))
      .catch(console.log)
  }


  render() {
    const { firstName, lastName, email, password, matchingPassword } = this.state;

    return (
      <form onSubmit={this.handleSumbit}>
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="John"
          value={firstName}
          onChange={this.handleChange("firstName")}
        />
        <label htmlFor="lname">Last name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lastName}
          onChange={this.handleChange("lastName")}
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={this.handleChange("email")}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={this.handleChange("password")}
        />
        <label htmlFor="password-match">Confirm Password:</label>
        <input
          type="password"
          id="password-match"
          name="password-match"
          value={matchingPassword}
          onChange={this.handleChange("matchingPassword")}
        />
        <button type="submit" onClick={this.handleSubmit}>Sign up</button>
      </form>
    )
  }
}

export default SignupForm;