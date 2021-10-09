'use strict';

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomEvents() {
  const randomEvents = [
        {
          name: "Monday Speed Workout",
          description: "",
          time: "",
          endTime: "",
          date: "",
          attending: "",
          eventAttendees: getRandomNum(0, 8),
        },
        {
          name: "Pickup Baseball",
          description: "",
          time: "",
          endTime: "",
          date: "",
          attending: "",
          eventAttendees: getRandomNum(0, 8),
        },
        {
          name: "Sunday Pickup Soccer at Hoboken",
          description: "",
          time: "",
          endTime: "",
          date: "",
          attending: "",
          eventAttendees: getRandomNum(0, 8),
        },
        {
          name: "Saturday 9v9 Pickup Soccer",
          description: "",
          time: "",
          endTime: "",
          date: "",
          attending: "",
          eventAttendees: getRandomNum(0, 8),
        },
        {
          name: "",
          description: "",
          time: "",
          endTime: "",
          date: "",
          attending: "",
          eventAttendees: getRandomNum(0, 8),
        },
  ],
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert(
      "Events",
      [
        
      ],
      {}
    );
    
  },

  down: (queryInterface, Sequelize) => {
   
  return queryInterface.bulkDelete('Events', null, {});
   
  }
};
