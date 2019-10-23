import React, {Component} from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
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
          <section id="line-break"></section>
          {/* Recent Decks */}
        </main>
        <Footer />
      </div>
    )
  }
}
