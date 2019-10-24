import React, {Component} from 'react'

export default class RenderCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <img src={this.props.image}></img>
      </div>
    )
  }
}