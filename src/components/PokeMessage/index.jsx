import React from 'react';

class PokeMessage extends React.Component {
  render() {
    return (
      <article className="message">
        <img src={this.props.message.avatar} className="avatar"></img>
        <p>{this.props.message.text}</p>
      </article>
    )
  }
}

export default PokeMessage;
