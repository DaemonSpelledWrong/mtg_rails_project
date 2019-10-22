import React, {Component} from 'react';
import Login from './Login';
import Register from './Register';
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

 export default class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       isLoggedIn: false
     }
   }
   checkLoggedInStatus = (event) => {

   }

  LoginButton = props => {
    return(
      <button onClick={props.onClick}>
        <Login />
      </button>
    )
  }
  LogoutButton = props => {
    return(
      <button onClick={props.onClick}>
        Logout
      </button>
    )
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
        <Login />
        <Register />
        </main>
        <Footer />
      </div>
    )
  }
}
