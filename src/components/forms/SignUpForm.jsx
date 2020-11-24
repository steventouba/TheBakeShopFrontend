import React from 'react';
import Axios from 'axios';
import styles from '../../stylesheets/Form.module.css';

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
      .then((res) => console.log(res))
      .catch(console.log)
  }

  render() {
    const { firstName, lastName, email, password, matchingPassword } = this.state;

    return (
      <main className={styles.wrapper}>
        <div className={styles.card}>
          <form onSubmit={this.handleSubmit} className={styles.container}>
            <div className={styles.group}>
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={firstName}
                onChange={this.handleChange("firstName")}
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="lname">Last name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={lastName}
                onChange={this.handleChange("lastName")}
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange("email")}
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange("password")}
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="password-match">Confirm Password</label>
              <input
                type="password"
                id="password-match"
                name="password-match"
                value={matchingPassword}
                onChange={this.handleChange("matchingPassword")}
              />
            </div>
            <button type="submit" value="submit">Sign up</button>
          </form>
        </div>
      </main>
    )
  }
}

export default SignupForm;