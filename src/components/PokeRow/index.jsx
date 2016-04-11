import React from 'react';
import PokeAvatar from '../PokeAvatar';

class PokeRow extends React.Component {
  onClick(e) {
    e.preventDefault();
    alert(this.props.name);
  }

  render() {
    return (
      <article className="PokeRow" onClick={this.onClick.bind(this)}>
        <span>{this.props.number}</span>
        <PokeAvatar number={this.props.number}></PokeAvatar>
        <h3>{this.props.name}</h3>
      </article>
    )
  }
}

export default PokeRow;
