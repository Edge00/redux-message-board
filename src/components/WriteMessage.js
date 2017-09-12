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

  componentWillMount () {
    this._loadUsername()
  }

  componentDidMount () {
    this.messageInput.focus();
  }

  _saveUsername (userName) {
    localStorage.setItem('username', userName);
  }

  _loadUsername () {
    const userName = localStorage.getItem('username');
    userName && this.setState({'userName': userName});
  }

  handleBlur () {
    this._saveUsername(this.state.userName);
  }

  submitMessage (evt) {
    evt.preventDefault();
    let name = this.state.userName;
    let content = this.state.messageContent;
    if (!name) return alert('请输入用户名');
    if (!content) return alert('请输入评论内容');
    this.props.onSubmit(name, content, new Date().getTime());
    this.setState({messageContent: ''});
    this.messageInput.focus();
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
            onBlur={this.handleBlur.bind(this)}
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
