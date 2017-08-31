import React, { Component } from 'react';

export default class WriteMessage extends Component {

  constructor (props) {
    super (props)
    this.state = {
      userName: '',
      messageContent: ''
    };
  }

  inputUserName (e) {
    this.setState({
      userName: e.target.value
    });
  }

  inputMessageContent (e) {
    this.setState({
      messageContent: e.target.value
    });
  }

  submitMessage (evt) {
    evt.preventDefault();
    let name = this.state.userName;
    let content = this.state.messageContent;
    if (!name) {
      alert('请输入用户名');
      return
    }
    if (!content) {
      alert('请输入评论内容')
      return
    }
    this.props.addMessage(name, content);
    this.setState({
      messageContent: ''
    });
    this.messageInput.focus();
  }

  componentDidMount() {
    this.userNameInput.focus();
  }

  render () {
    return (
      <form onSubmit={this.submitMessage.bind(this)} >
        <div className="from-item-wrapper">
          <label htmlFor="">用户名：</label>
          <input
            ref={(input) => this.userNameInput = input}
            value={this.state.userName}
            onChange={this.inputUserName.bind(this)}
            type="text"
          />
        </div>
        <div className="from-item-wrapper">
          <label htmlFor="">评论内容：</label>
          <textarea
            ref={(textarea) => this.messageInput = textarea}
            value={this.state.messageContent}
            onChange={this.inputMessageContent.bind(this)}
          ></textarea>
        </div>
        <div className="submit-button-wrapper">
          <button>发布</button>
        </div>
      </form>
    )
  }
}
