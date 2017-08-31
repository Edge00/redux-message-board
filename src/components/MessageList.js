import React, { Component } from 'react';
import Message from './Message.js';

export default class MessageList extends Component {

  render () {
    let messages = this.props.message;
    return (
      <div className="commont-list-container">
        <ul>
          {messages.map((item, key) => <Message message={item} key={key} />)}
        </ul>
      </div>
    );

  }
}
