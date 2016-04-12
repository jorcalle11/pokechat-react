var pokemons = require('./pokemons');

module.exports = {
  pokemons:{
    find: function(callback) {
      setTimeout(() => {
        callback(pokemons);
      },3000);
    }
  }
};
