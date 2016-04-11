import React from 'react';

class PokeAvatar extends React.Component {
  render() {
    let avatar = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
    return (
      <figure className="PokeAvatar">
        <img alt="PokeAvatar" src={avatar}></img>
      </figure>
    )
  }
}

export default PokeAvatar;
