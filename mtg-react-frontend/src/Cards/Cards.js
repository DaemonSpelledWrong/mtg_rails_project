import React, {Component} from 'react';
import AllCards from '../AllCards/AllCards'

export default class Cards extends Component {
render() {
  return(
    <div className="cardRenderZone">
      <section id="line-break"></section>
      <ul className="currentCard"></ul> 
      <div className="card-zone">
        {this.state && this.state.magic_cards &&
          <AllCards magic_cards={this.state.magic_cards} sampleCards={this.state.sampleCards} currentCardDisplay={this.currentCardDisplay}/>
        }
      </div>
    </div>
  )
}
}
