import React from 'react';
import PokeRow from '../PokeRow';

class PokeTable extends React.Component {
  render() {
    return (
      <section className="PokeTable">
        {
          this.props.pokemons.map((pokemon,i) => {
            return (
              <PokeRow key={i} number={pokemon.number} name={pokemon.name}/>
            )
          })
        }
      </section>
    )
  }
}

export default PokeTable;
