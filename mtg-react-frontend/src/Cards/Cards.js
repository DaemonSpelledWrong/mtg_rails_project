import React, {Component} from 'react';
import AllCards from '../AllCards/AllCards'

export default class Cards extends Component {
  render() {
    return(
      <div className="cardRenderZone">
        <ul className="currentCard"></ul> 
        <div className="card-zone">
          {this.props.magic_cards &&
            <AllCards magic_cards={this.props.magic_cards} sampleCards={this.props.sampleCards} currentCardDisplay={this.props.currentCardDisplay}/>
          }
        </div>
      </div>
    )
  }
}
