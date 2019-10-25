import React, {Component} from 'react'

export default class RenderCard extends Component {

  render() {
    return(
      <div>
        <img 
          src={this.props.image} 
          alt=""
          onClick={event => {
            let ul = document.querySelector('.currentCard')
            ul.innerHTML = `
            <li>${this.props.name}</li>
            <br>
            <li>${this.props.rarity}</li>
            <br>
            <li>${this.props.cmc}</li>
            <br>
            <li>${this.props.card_type}</li>
            <br>
            <li><img src=${this.props.image}></img></li>
            `
          }}
        ></img>
      </div>
    )
  }
}