import React, {Component} from 'react';

export default class Login extends Component {
  working = () => {
    console.log('Working!');
  }
  render() {
    return(
      <form onSubmit={this.working}>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" type="text" placeholder="example@example.com"name="email"></input>

        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="text" placeholder="password" name="password"></input>

        <input type="submit" value="Login"></input>
      </form>
    )
  }
}