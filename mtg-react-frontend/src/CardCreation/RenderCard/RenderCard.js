import React, {Component} from 'react'

export default class RenderCard extends Component {

  render() {
    return(
      <div>
        <img src={this.props.image} alt=""></img>
      </div>
    )
  }
}