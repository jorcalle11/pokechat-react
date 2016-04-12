import React from 'react';
import { render } from 'react-dom';
import PokeApp from './components/PokeApp';

const mount = document.getElementById('app');

render( <PokeApp/>, mount);
