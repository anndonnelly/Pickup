'use strict';
const faker = require("faker");

// function getRandomNum(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function randomLocations() {
// const fakeLocationsNames = [
//  "East River Park"
//   "Chelsea Piers - Pier 62",
//   "South Lawn / Quiet Lawn",
//   "West Highway",
//   "Central Park",
//   "Brooklyn Bridge Park Pier 2",
//   "Hudson River Park",
//   "Governor’s Island",
//   "The Williamsburg Bridge",
//   "Washington Square Park",
//   "Tompkins Square Park",
//   "Prospect Park",
//   "Gaelic Park",
//   "Not Listed"
// ];
// let locationNum = getRandomNum(1, fakeLocationsNames.length);
// return fakeLocationsNames[locationNum];
// }


// function getRandomZip(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// const fakeLocations = [
//   {
//     name: `${randomLocations()}`,
//     address: faker.address.streetAddress(),
//     city: "New York",
//     // state: "New York",
//     zipCode: `10${getRandomZip(100, 500)}`,
//   },
// ];

// for (let i = 0; i < 11; i++){
//   let newLocation = {
//     name: `${randomLocations()}`,
//     address: faker.address.streetAddress(),
//     city: "New York",
//     // state: "New York",
//     zipCode: `10${getRandomZip(100, 500)}`,
//   };
//   fakeLocations.push(newLocation);
// }



module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert(
        "Locations",
        [
          {
            name: "East River Park",
            address: "FDR Drive",
            city: "New York,",
            zipCode: "10002"
          },
          {
            name: "Chelsea Piers - Pier 62",
            address: "West Side Hwy",
            city: "New York,",
            zipCode: "10011"
          },
          {
            name: "South Lawn / Quiet Lawn",
            address: "75 Great Lawn Oval, Central Park",
            city: "New York,",
            zipCode: "10024"
          },
          {
            name: "Hudson River Park",
            address: "353 West St., Pier 40",
            city: "New York,",
            zipCode: "10014"
          },
          {
            name: "Sheep Meadow",
            address: "1802 65th Street Transverse, Central Park",
            city: "New York,",
            zipCode: "10065"
          },
          {
            name: "Pier 2 Field",
            address: "Brooklyn Bridge Park",
            city: "New York,",
            zipCode: "11201"
          },
          {
            name: "Lavender Field",
            address: "Governor’s Island",
            city: "New York,",
            zipCode: "10004"
          },
          {
            name: "Field #43",
            address: "Randall's Island Park",
            city: "New York,",
            zipCode: "10035"
          },
          {
            name: "The Williamsburg Bridge",
            address: "Brooklyn",
            city: "New York,",
            zipCode: "11249"
          },
          {
            name: "Washington Square Park",
            address: "Greenwich Village",
            city: "New York,",
            zipCode: "10012"
          },
          {
            name: "Tompkins Square Park",
            address: "E 10th St",
            city: "New York,",
            zipCode: "10009"
          },
           {
            name: "Prospect Park",
            address: "Park Slope, Brooklyn",
            city: "New York,",
            zipCode: "11225"
          },
           {
            name: "Gaelic Park",
            address: "Manhattan College, Bronx",
            city: "New York,",
            zipCode: "10463"
          },
        ],
        {}
      );
     
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete("Locations", null, {});
    
  }
};
