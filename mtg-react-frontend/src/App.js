import React, {Component} from 'react';
import Login from './Login/Login';
// import Register from './Register/Register';
import AllCards from './AllCards/AllCards'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

 export default class App extends Component {

  state = {
    magic_cards: [],
    isLoggedIn: false,
    sampleCards: []
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

  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
          <div className="user-zone">
            <Login />
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
