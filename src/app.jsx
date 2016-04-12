import React from 'react';
import { render } from 'react-dom';
import PokeApp from './components/PokeApp';
import pokemons from './pokemons';

const mount = document.getElementById('app');

render( <PokeApp pokemons={pokemons} />, mount);
