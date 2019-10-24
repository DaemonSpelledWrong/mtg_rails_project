import React, {Component} from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import AllCards from './AllCards/AllCards'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'
import Greeting from './Greeting/Greeting'

 export default class App extends Component {

  state = {
    magic_cards: [],
    isLoggedIn: false,
    sampleCards: [],
    currentPage: 'greeting'
  }

  componentDidMount() {
    fetch('http://localhost:3000/standard_cards', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(results => this.setState({
      magic_cards: results
    }))
    .then(this.sampleCardDeck)
  }

  sampleCardDeck = () => {
    let sample = []
    for(let i = 0; i < 20; i++) {
      sample.push(this.state.magic_cards[i])
    }

    this.setState({
      sampleCards: sample
    })
  }

  loginUser = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  logoutUser = (event) => {
    event.preventDefault()
    this.setState({
      isLoggedIn: false
    })
    localStorage.removeItem('authToken')
  }

  loadHomePage = (event) => {
    event.preventDefault()
    this.setState({
      currentPage: 'greeting'
    })
    return <Greeting />
  }

  loadLoginPage = (event) => {
    event.preventDefault()
    this.setState({
      currentPage: 'login'
    })
    return <Login isLoggedIn={this.state.isLoggedIn} loginUser={this.loginUser}/>
  }

  loadSignUpPage = (event) => {
    event.preventDefault()
    this.setState({
      currentPage: 'register'
    })
    return <Register />
  }

  changePage = (page) => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation 
          isLoggedIn={this.state.isLoggedIn} 
          logoutUser={this.logoutUser}
          loadLoginPage={this.loadLoginPage}
          loadHomePage={this.loadHomePage}
          loadSignUpPage={this.loadSignUpPage}
          changePage={this.changePage}
        />
        <main>
          <div className="user-zone">
            {
              this.state.currentPage !== 'greeting'
              ? this.state.currentPage !== 'register'
                ? <Login />
                : <Register />
              : <Greeting />
            }
          </div>
          <section id="line-break"></section>
          
          <div className="card-zone">
            {this.state && this.state.magic_cards &&
              <AllCards magic_cards={this.state.magic_cards} sampleCards={this.state.sampleCards}/>
            }
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
