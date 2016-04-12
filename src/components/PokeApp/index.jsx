import React from 'react';

import PokeTable from '../PokeTable';
import PokeHeader from '../PokeHeader';
import Pokechat from '../PokeChat';

class PokeApp extends React.Component {

  constructor(props){
    super(props);
    this.state = { messages: [] };
    this.onGrowl = this.onGrowl.bind(this);
  }

  onGrowl(pokemon) {
    let text = `${pokemon.name}, ${pokemon.name}, ${pokemon.name}!!!`;
    this.state.messages.push({ avatar: pokemon.avatar, text : text });
    let messages = this.state.messages;
    console.log(messages);
    this.setState({ messages: messages });
  }

  render() {
    return (
      <section className="PokeApp">
        <PokeHeader
          title="Pokechat"
          facebook="jorcalle11"
          twitter="Jomaca11"
          github="jorcalle11"/>
        <PokeTable pokemons={this.props.pokemons} onGrowl={this.onGrowl} />
        <Pokechat messages={this.state.messages} />
      </section>
    )
  }
}

export default PokeApp;
