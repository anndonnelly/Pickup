'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "RSVP",
      [
        {
          eventId: 2,
          userId: 1,
        },
        {
          eventId: 3,
          userId: 2,
        },
        {
          eventId: 4,
          userId: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("RSVP", null, {});
  },
};
