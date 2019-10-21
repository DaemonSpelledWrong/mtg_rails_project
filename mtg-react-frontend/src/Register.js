import React, {Component} from 'react';

export default class Register extends Component {
  render() {
    return(
      <form id="signup-submission">
        <label htmlFor="signup-email">Email</label>
        <input id="signup-email" type="text" placeholder="example@example.com"name="email"></input>

        <label htmlFor="signup-password">Password</label>
        <input id="signup-password" type="text" placeholder="password" name="password"></input>

        <label htmlFor="signup-password_confirmation">Password Confirmation</label>
        <input id="signup-password_confirmation" type="text" placeholder="password_confirmation" name="password_confirmation"></input>
        
        <input type="submit" value="Sign up"></input>
      </form>
    )
  }
}
