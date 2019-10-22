import React, {Component} from 'react';
import './Navigation.css'

export default class Navigation extends Component {
  render() {
    return(
      <header>
        <section className="title">
          <img src="https://deckmaster.info/images/sets/PPR_R.png"></img>
          <h1>Magic Deckbuilder Deluxe</h1>
        </section>
        <section className="main-site-navigation">
          <ul className="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/">Sign Up</a></li>
            <li><a href="/">Login</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </section>
      </header>
    )
  }
}
