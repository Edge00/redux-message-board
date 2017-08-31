import React, { Component } from 'react';
import WriteMessage from '../components/WriteMessage.js';
import MessageList from '../components/MessageList.js';

let messages = [
  {name: '阿萨德', content: '按时大大发按时大大发按时'}
]

export default class MessageBoard extends Component {
  constructor () {
    super ()
    this.state = {
      messages: messages
    }
  }

  addMessage (userName, content) {
    let messages = this.state.messages;
    messages.push({name: userName, content})
    this.setState({
      messages: messages
    });
  }

  render () {
    return (
      <div>
        <div className="container">
          <WriteMessage addMessage={this.addMessage.bind(this)} />
          <MessageList message={this.state.messages} />
        </div>
      </div>
    )
  }
}
