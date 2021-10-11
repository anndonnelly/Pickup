("use strict");
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Events",
      [
        {
          name: "Sunday Friendly Pickup Basketball",
          description:
            "Update Sept 17th: Starting Sun Sept 19th, we will be in Central Park North Meadow every Sunday for Fall, and welcoming all comers! Games start at 2:00pm promptly, and go till tired (or till dark, in November).",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1633831643/Pickup/Basketball_ezq5av.jpg",
          time: "11:00 AM to 12:30 PM",
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "2021/10/01",
          attending: false,
          eventAttendees: 6,
          locationId: 1,
          ownerId: 2,
          typeId: 3,
          createdAt: faker.date.past(1),
          updatedAt: new Date(),
        },
        {
          name: "Pickup Baseball",
          description:
            "Games are set up for 2 6v6 or rotation 8v8 games (24 attendees) If games are full, they are full.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1633831740/Pickup/Baseball_vfr7bh.jpg",
          time: "3:30PM to 5:30 PM",
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "2021/10/01",
          attending: false,
          eventAttendees: 8,
          locationId: 2,
          ownerId: 3,
          typeId: 8,
          createdAt: faker.date.past(1),
          updatedAt: new Date(),
        },
        {
          name: "Sunday Pickup Soccer at Hoboken",
          description:
            "Full Disclosure: This field is pretty tore up. We are grateful to have the permit but it needs major repairs. Discounted $5 game.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1633831538/Pickup/WomensSoccer_ksxwmu.png",
          time: "11:00 AM to 12:30 PM",
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "2021/10/01",
          attending: false,
          eventAttendees: 5,
          locationId: 3,
          ownerId: 4,
          typeId: 2,
          createdAt: faker.date.past(1),
          updatedAt: new Date(),
        },
        {
          name: "Saturday 9v9 Pickup Soccer",
          description:
            "Please RSVP to reserve your spot. We do this to make sure everyone gets a high quality game by having that the right amount of people show up.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1633829428/Pickup/DowntownPickupSoccer_yfxl9w.png",
          time: "9:30 AM to 11:00 AM",
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "2021/10/01",
          attending: false,
          eventAttendees: 7,
          locationId: 4,
          ownerId: 5,
          typeId: 2,
          createdAt: faker.date.past(1),
          updatedAt: new Date(),
        },
        {
          name: "Clearing the Fog - November Project",
          description:
            "Our Mission: Play safe, get your workout on & HAVE FUN!!",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1633831295/Pickup/NovemberProject_indvpj.jpg",
          time: "6:30 AM to 7:30 AM",
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "2020/10/01",
          attending: false,
          eventAttendees: 4,
          locationId: 5,
          ownerId: 6,
          typeId: 15,
          createdAt: faker.date.past(1),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null, {});
  },
};
