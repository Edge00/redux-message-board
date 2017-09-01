import React, { Component } from 'react';
import WriteMessage from '../components/WriteMessage.js';
import MessageList from '../components/MessageList.js';

let messages = [];

export default class MessageBoard extends Component {
  constructor () {
    super ()
    this.state = {
      messages: messages
    };
  }

  componentWillMount () {
    this._loadMessages();
  }

  _saveMessages (messages) {
    localStorage.setItem('messages', JSON.stringify(messages));
  }

  _loadMessages () {
    let messages = localStorage.getItem('messages');
    if (messages) {
      messages = JSON.parse(messages);
      this.setState({
        messages
      });
    }
  }

  addMessage (userName, content, createdTime) {
    let messages = this.state.messages;
    messages.push({name: userName, content, createdTime});
    this.setState({
      messages: messages
    });
    this._saveMessages(messages);
  }

  handleDeleteMessage (index) {
    const messages = this.state.messages;
    messages.splice(index, 1);
    this.setState({messages});
    this._saveMessages(messages);
  }

  render () {
    return (
      <div>
        <div className="container">
          <WriteMessage onSubmit={this.addMessage.bind(this)} />
          <MessageList
            message={this.state.messages}
            onDeleteMessage={this.handleDeleteMessage.bind(this)}
          />
        </div>
      </div>
    );
  }
}
