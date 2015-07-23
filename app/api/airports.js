// airports.js
var airports = require('./json/airports.json');

// Returns list of airports
// fetched from JSON.
function fetchAirports() {
  var aps = [];
  for (var i in airports) {
    aps.push(airports[i]["name"]);
  }
  return aps.sort();
}

module.exports = {
  fetchAirports: fetchAirports
}
