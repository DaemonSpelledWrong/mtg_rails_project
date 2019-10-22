import React, {Component} from 'react';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
    email:'',
    password:''
    }
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
      <form id='login-submission' onSubmit={this.handleSubmit(event)}>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" type="text" placeholder="example@example.com" name="email" 
        onChange={event => this.updateEmail(event)} value={this.state.email} />

        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="text" placeholder="password" name="password" 
        onChange={event => this.updatePassword(event)} value={this.state.password} />

        <input type="submit" value="Login" />
      </form>
    )
  }
}