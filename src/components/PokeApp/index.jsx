import React from 'react';

import PokeTable from '../PokeTable';
import PokeHeader from '../PokeHeader';
import Pokechat from '../PokeChat';

class PokeApp extends React.Component {

  constructor(props){
    super(props);
    this.state = { pokemons: [], messages: [] };
    this.onGrowl = this.onGrowl.bind(this);
  }

  componentWillMount() {
    fetch('http://localhost:3000/pokemons/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ pokemons: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onGrowl(pokemon) {
    let text = `${pokemon.name}, ${pokemon.name}, ${pokemon.name}!!!`;
    this.state.messages.push({ avatar: pokemon.avatar, text : text });
    let messages = this.state.messages;
    this.setState({ messages: messages });
  }



  render() {
    if(!this.state.pokemons.length) {
      return (
        <section className="PokeApp">
          <PokeHeader
            title="Pokechat"
            facebook="jorcalle11"
            twitter="Jomaca11"
            github="jorcalle11"/>
          <h3 className="load">Cargando....</h3>
        </section>
      )
    }
    return (
      <section className="PokeApp">
        <PokeHeader
          title="Pokechat"
          facebook="jorcalle11"
          twitter="Jomaca11"
          github="jorcalle11"/>
        <PokeTable pokemons={this.state.pokemons} onGrowl={this.onGrowl} />
        <Pokechat messages={this.state.messages} />
      </section>
    )
  }
}

export default PokeApp;
