import React, {Component} from 'react';
import './App.css'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
    email:'',
    password:''
    }
  }
  logUserIn = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/authenticate', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(token => {
      localStorage.setItem('authToken', token.auth_token)
    })
  }
  updateEmail = (event) => {
    this.setState({
      email: event.target.value
    })  }
  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  render() {
    return(
      <form id='form-submissions' onSubmit={event => this.logUserIn(event)}>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" type="text" placeholder="example@example.com" name="email" 
        onChange={event => this.updateEmail(event)} value={this.state.email} />

        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="password" placeholder="password" name="password" 
        onChange={event => this.updatePassword(event)} value={this.state.password} />

        <input type="submit" value="Login" />
      </form>
    )
  }
}