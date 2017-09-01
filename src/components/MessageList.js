import React, { Component } from 'react';
import Message from './Message.js';

export default class MessageList extends Component {

  handleDeleteMessage (index) {
    this.props.onDeleteMessage(index)
  }

  render () {
    let messages = this.props.message;
    return (
      <div className="commont-list-container">
        <ul>
          {messages.map((item, key) => <Message
            onDeleteMessage={this.handleDeleteMessage.bind(this)}
            message={item}
            key={key}
            index={key}
          />)}
        </ul>
      </div>
    );

  }
}
