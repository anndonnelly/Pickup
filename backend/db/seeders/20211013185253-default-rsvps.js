'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "RSVPs",
      [
        {
          eventId: 1,
          userId: 1,
        },
        {
          eventId: 2,
          userId: 1,
        },
        {
          eventId: 3,
          userId: 1,
        },
        {
          eventId: 1,
          userId: 2,
        },
        {
          eventId: 2,
          userId: 2,
        },
        {
          eventId: 3,
          userId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("RSVPs", null, {});
  },
};
