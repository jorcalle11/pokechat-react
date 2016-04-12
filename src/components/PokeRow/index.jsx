import React from 'react';
import PokeAvatar from '../PokeAvatar';

class PokeRow extends React.Component {
  onClick(e) {
    e.preventDefault();
    let pokemon = {
      avatar : `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`,
      name: `${this.props.name}`
    };
    this.props.growl.call(null, pokemon);
  }

  render() {
    return (
      <article className="PokeRow" onClick={this.onClick.bind(this)}>
        <span> {this.props.number} </span>
        <PokeAvatar number={this.props.number} />
        <h3>{this.props.name}</h3>
      </article>
    )
  }
}

export default PokeRow;
