import React from 'react';
import ReactDOM from 'react-dom';
import PokeApp from './components/PokeApp';
import pokemons from './pokemons';

const mount = document.getElementById('app');

ReactDOM.render( <PokeApp pokemons={pokemons} />, mount);
