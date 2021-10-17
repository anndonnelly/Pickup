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
        {
          eventId: 7,
          userId: 1,
        },
        {
          eventId: 8,
          userId: 1,
        },
        {
          eventId: 9,
          userId: 1,
        },
        {
          eventId: 10,
          userId: 1,
        },
        {
          eventId: 2,
          userId: 4,
        },
        {
          eventId: 3,
          userId: 4,
        },
        {
          eventId: 1,
          userId: 5,
        },
        {
          eventId: 2,
          userId: 5,
        },
        {
          eventId: 3,
          userId: 5,
        },
        {
          eventId: 1,
          userId: 6,
        },
        {
          eventId: 2,
          userId: 6,
        },
        {
          eventId: 3,
          userId: 6,
        },
        {
          eventId: 1,
          userId: 7,
        },
        {
          eventId: 2,
          userId: 7,
        },
        {
          eventId: 3,
          userId: 7,
        },
        {
          eventId: 1,
          userId: 8,
        },
        {
          eventId: 2,
          userId: 8,
        },
        {
          eventId: 3,
          userId: 8,
        },
        {
          eventId: 1,
          userId: 9,
        },
        {
          eventId: 2,
          userId: 9,
        },
        {
          eventId: 3,
          userId: 9,
        },
        {
          eventId: 1,
          userId: 10,
        },
        {
          eventId: 2,
          userId: 10,
        },
        {
          eventId: 3,
          userId: 10,
        },
        {
          eventId: 1,
          userId: 11,
        },
        {
          eventId: 2,
          userId: 11,
        },
        {
          eventId: 3,
          userId: 11,
        },
        {
          eventId: 1,
          userId: 12,
        },
        {
          eventId: 2,
          userId: 12,
        },
        {
          eventId: 3,
          userId: 12,
        },
        {
          eventId: 1,
          userId: 13,
        },
        {
          eventId: 2,
          userId: 13,
        },
        {
          eventId: 3,
          userId: 13,
        },
        {
          eventId: 1,
          userId: 14,
        },
        {
          eventId: 18,
          userId: 14,
        },
        {
          eventId: 3,
          userId: 15,
        },
        {
          eventId: 19,
          userId: 15,
        },
        {
          eventId: 20,
          userId: 15,
        },
        {
          eventId: 21,
          userId: 15,
        },
        {
          eventId: 22,
          userId: 16,
        },
        {
          eventId: 23,
          userId: 16,
        },
        {
          eventId: 24,
          userId: 16,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("RSVPs", null, {});
  },
};
