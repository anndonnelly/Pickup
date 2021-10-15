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
          eventId: 1,
          userId: 1,
        },
        {
          eventId: 1,
          userId: 1,
        },
        {
          eventId: 4,
          userId: 1,
        },
        {
          eventId: 5,
          userId: 1,
        },
        {
          eventId: 6,
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
