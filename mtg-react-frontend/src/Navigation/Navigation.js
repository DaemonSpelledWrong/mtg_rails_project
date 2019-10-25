import React, {Component} from 'react';
import './Navigation.css'

export default class Navigation extends Component {
  render() {
    return(
      <header>
        <section className="title">
          <img src="https://deckmaster.info/images/sets/PPR_R.png" alt="MTG Logo"></img>
          <h1>Magic Deckbuilder Deluxe</h1>
        </section>
        <section className="main-site-navigation">
          {this.props.isLoggedIn === true
            ? 
            <ul className="navbar">
              <li><a href="/" onClick={this.props.loadHomePage}>Home</a></li>
              <li><a href="/" onClick={this.props.loadCardPage}>Cards</a></li>
              <li><a href="/">Build Deck</a></li>
              <li><a href="/" onClick={this.props.logoutUser}>Logout</a></li>
            </ul>
            :
            <ul className="navbar">
              <li><a href="/" onClick={this.props.loadHomePage}>Home</a></li>
              <li><a href="/" onClick={this.props.loadCardPage}>Cards</a></li>
              <li><a href="/">Build Deck</a></li>
              <li><a href="/" onClick={this.props.loadSignUpPage}>Sign Up</a></li>
              <li><a href="/" onClick={this.props.loadLoginPage}>Login</a></li>
            </ul>
          }
        </section>
      </header>
    )
  }
}
