import React from 'react';

class PokeMessage extends React.Component {
  render() {
    return (
      <article className="message">
        <img src={this.props.message.avatar} className="avatar"></img>
        <p>{this.props.message.name}, {this.props.message.name}, {this.props.message.name}!!!</p>
      </article>
    )
  }
}

export default PokeMessage;
