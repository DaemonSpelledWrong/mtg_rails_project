import React, {Component} from 'react';
import RenderCard from '../CardCreation/RenderCard/RenderCard'
import './AllCards.css'

export default class AllCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const renderCard = this.props.sampleCards.map(card => {
        return (
          <RenderCard 
          key={Date.now() + card.id}
          {...card}/>
        )
    })

    return(
      <div className="CardContainer">{renderCard}</div>
    )
  }
}
