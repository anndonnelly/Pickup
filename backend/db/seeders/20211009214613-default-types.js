'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      "Types",
      [
        {
          name: "Football",
        },
        {
          name: "Soccer",
        },
        {
          name: "Basketball",
        },
        {
          name: "Badminton",
        },
        {
          name: "Tennis",
        },
        {
          name: "Table Tennis",
        },
        {
          name: "Pool",
        },
        {
          name: "Baseball",
        },
        {
          name: "Volleyball",
        },
        {
          name: "Gaelic Football",
        },
        {
          name: "Rugby",
        },
        {
          name: "Running",
        },
        {
          name: "Pickleball",
        },
        {
          name: "Softball",
        },
        {
          name: "November Project",
        },
        {
          name: "Flag Football",
        },
        {
          name: "Cricket",
        },
        {
          name: "Cycling",
        },
        {
          name: "Hockey",
        },
        {
          name: "New York Marathon Training",
        },
      ],
      {}
    );
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete("Types", null, {});
    
  }
};
