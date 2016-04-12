import React from 'react';

import PokeTable from '../PokeTable';
import PokeHeader from '../PokeHeader';
import Pokechat from '../PokeChat';
import uid from 'uid';
import io from 'socket.io-client';

class PokeApp extends React.Component {

  constructor(props){
    super(props);
    this.state = { pokemons: [], messages: [] };
    this.onGrowl = this.onGrowl.bind(this);
    this.user = uid(10);
  }

  componentWillMount() {
    fetch('http://192.168.1.11:3000/pokemons/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ pokemons: data });
      })
      .catch((err) => {
        console.log(err);
      });

    this.socket = io('http://192.168.1.11:3000');
    this.socket.on('message', (message) => {
      if (message.user !== this.user) {
        this.newMessage(message);
      }
    });
  }

  onGrowl(pokemon) {
    pokemon.user = this.user;
    this.newMessage(pokemon);
    this.socket.emit('message', pokemon);
  }

  newMessage(msg) {
    this.state.messages.push(msg);
    let message = this.state.messages;
    this.setState({messages: message});
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
