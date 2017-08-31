import React, { Component } from 'react';

export default class message extends Component{
  render () {
    return (
      <li>
        <em>{this.props.message.name}</em>：{this.props.message.content}
      </li>
    )
  }
}
