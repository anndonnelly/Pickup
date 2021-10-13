'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "RSVPs",
      [
        {
          eventId: 2,
          userId: 1,
        },
        {
          eventId: 3,
          userId: 1,
        },
        {
          eventId: 4,
          userId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("RSVPs", null, {});
  },
};
