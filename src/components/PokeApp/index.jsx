import React from 'react';

import PokeTable from '../PokeTable';
import PokeHeader from '../PokeHeader';
import Pokechat from '../PokeChat';

class PokeApp extends React.Component {
  render() {
    return (
      <section className="PokeApp">
        <PokeHeader
          title="Pokechat"
          facebook="jorcalle11"
          twitter="Jomaca11"
          github="jorcalle11"/>
        <PokeTable pokemons={this.props.pokemons}/>
        <Pokechat/>
      </section>
    )
  }
}

export default PokeApp;
