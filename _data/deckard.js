const fetch = require("node-fetch");

module.exports = async function() {

  return fetch("https://api.github.com/repos/voightco/deckard")
    .then(res => res.json()) 
    .then(json => {
      return {
        stargazers: json.stargazers_count,
        description: json.description,
        name: json.name
      };
    });
};