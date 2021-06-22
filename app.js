const events = require("events");
const util = require("util");

// object constructor
// const teams = function (name) {
//   this.name = name;
// }

// util.inherits(teams, events.EventEmitter);

// const Arsenal = new teams("Arsenal");
// const Juventus = new teams("Juventus");
// const Galatasaray = new teams("Galatasaray");

// const teamArray = [Arsenal, Juventus, Galatasaray];

// teamArray.forEach((team) => {
//   team.on("nation", function (nation) {
//     console.log(team.name + " is " + nation + "football club");
//   });
// });

// Arsenal.emit("nation", "English");


const countries = function(name) {
  this.name = name;
};

util.inherits(countries, events.EventEmitter);

const SouthAfrica = new countries("SouthAfrica");
const Mauritius = new countries("Mauritius");
const Ghana = new countries("Ghana");

const countryArray = [SouthAfrica, Mauritius, Ghana];

countryArray.forEach((country) => {
  country.on("nation", (nation) => {
    console.log(country.name + " is " + nation + " continent")
  });
});

SouthAfrica.emit("nation", "African");
Mauritius.emit("nation", "Tropical");
Ghana.emit("nation", "Central African");