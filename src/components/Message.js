import React, { Component } from 'react';

export default class message extends Component{
  constructor () {
    super()
    this.state = {
      timeString: ''
    }
  }

  _updateTimeString () {
    const createdTime = this.props.message.createdTime;
    const duration = (new Date().getTime() - createdTime) / 1000;
    this.setState({
      timeString: duration > 60
      ? `${Math.round(duration / 60)}分钟前`
      : `${Math.ceil(duration)}秒前`
    });
  }

  handleDeleteMessage () {
    this.props.onDeleteMessage(this.props.index)
  }

  componentWillMount () {
    this._updateTimeString();
    this.updateTimer = setInterval(() => {
      this._updateTimeString();
    }, 5000);
  }

  componentWillUnmount () {
    clearInterval(this.updateTimer);
  }

  _getProcessedContent (content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>');
  }

  render () {
    return (
      <li>
        <span
          onClick={this.handleDeleteMessage.bind(this)}
          className="delete-message"
        >删除</span>
        <em>{this.props.message.name}</em>：
        <span
          dangerouslySetInnerHTML={{__html: this._getProcessedContent(this.props.message.content)}}
        ></span>
        <p className="message-time">{this.state.timeString}</p>
      </li>
    )
  }
}
