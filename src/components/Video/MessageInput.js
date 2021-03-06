import React from 'react';

class MessageInput extends React.Component {

  mixins = [React.addons.LinkedStateMixin],

  keyHandler (event) {
    var msg = this.state.message.trim();
    if (event.keyCode === 13 && msg.length) {
      this.props.messageHandler(msg);
      this.setState({ message: '' });
    }
  }

  getInitialState () {
    return { message: '' };
  }

  render {
    return (
      <input type="text"
        className = 'form-control'
        placeholder='Enter a message...'
        valueLink={this.linkState('message')}
        onKeyUp={this.keyHandler}/>
    );
  }
});
