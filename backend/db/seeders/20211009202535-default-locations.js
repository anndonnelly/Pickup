'use strict';
const faker = require("faker");

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomLocations() {
const fakeLocationsNames = [
  "East River Park",
  "Chelsea Piers - Pier 62",
  "South Lawn / Quiet Lawn",
  "West Highway",
  "Central Park",
  "Brooklyn Bridge Park Pier 2",
  "Hudson River Park",
  "Governor’s Island",
  "The Williamsburg Bridge",
  "Washington Square Park",
  "Tompkins Square Park",
  "Prospect Park"
];
let locationNum = getRandomNum(1, fakeLocationsNames.length);
return fakeLocationsNames[locationNum];
}


function getRandomZip(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const fakeLocations = [
  {
    name: `${randomLocations()}`,
    address: faker.address.streetAddress(),
    city: "New York",
    // state: "New York",
    zipCode: `10${getRandomZip(100, 500)}`,
  },
];

for (let i = 0; i < 11; i++){
  let newLocation = {
    name: `${randomLocations()}`,
    address: faker.address.streetAddress(),
    city: "New York",
    // state: "New York",
    zipCode: `10${getRandomZip(100, 500)}`,
  };
  fakeLocations.push(newLocation);
}
module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert(
        "Locations", fakeLocations,
        {}
      );
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete("Locations", null, {});
    
  }
};
