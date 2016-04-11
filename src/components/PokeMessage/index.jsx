import React from 'react';

class PokeMessage {
  constructor() {

  }

  render() {
    let avatar = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.pokemon.number}.png`;
    return (
      <article className="message">
        <img src={avatar} className="avatar"></img>
        <p>{this.props.pokemon.name}, this.props.pokemon.name}, this.props.pokemon.name}!!!</p>
      </article>
    )
  }
}
