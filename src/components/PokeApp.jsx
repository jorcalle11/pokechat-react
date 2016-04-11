import React from 'react';

import PokeTable from './PokeTable';
import PokeHeader from './PokeHeader';

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
      </section>
    )
  }
}

export default PokeApp;
