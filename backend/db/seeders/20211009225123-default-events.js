("use strict");
// const faker = require("faker");

// function setTime(date) {
//   let time = date.toString().split("T")[1];
//   time = time.toString().split("").slice(0, 13).join("")
//   return time;
// }

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
          // time: "11:00 AM to 12:30 PM",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          date: "Thu, November 18, 2021, 11:00 AM",
          // date: "2021/10/01",
          // attending: 4,
          eventAttendees: 6,
          locationId: 1,
          ownerId: 1,
          typeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pickup Baseball",
          description:
            "Games are set up for 2 6v6 or rotation 8v8 games (24 attendees) If games are full, they are full.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1633831740/Pickup/Baseball_vfr7bh.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Sat, October 23, 2021, 11:30 AM",
          // attending: 5,
          eventAttendees: 8,
          locationId: 2,
          ownerId: 1,
          typeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sunday Pickup Soccer at Hoboken",
          description:
            "Full Disclosure: This field is pretty tore up. We are grateful to have the permit but it needs major repairs. Discounted $5 game.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634347414/Pickup/Screen_Shot_2021-10-15_at_9.21.25_PM_isgtne.png",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Wed, November 17, 2021, 12:06 PM",
          // attending: 5,
          eventAttendees: 5,
          locationId: 3,
          ownerId: 1,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saturday 9v9 Pickup Soccer",
          description:
            "Please RSVP to reserve your spot. We do this to make sure everyone gets a high quality game by having that the right amount of people show up.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1633829428/Pickup/DowntownPickupSoccer_yfxl9w.png",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Tue, November 16, 2021, 7:00 PM",
          // attending: 7,
          eventAttendees: 7,
          locationId: 4,
          ownerId: 5,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clearing the Fog - November Project",
          description:
            "Our Mission: Play safe, get your workout on & HAVE FUN!!",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1633831295/Pickup/NovemberProject_indvpj.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Thu, November 18, 2021, 06:00 AM",
          // attending: 4,
          eventAttendees: 4,
          locationId: 5,
          ownerId: 6,
          typeId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pickup GAA Hurling",
          description:
            "The New York County Board of the Gaelic Athletic Association, or New York GAA, is one of the county boards of the Gaelic Athletic Association outside Ireland, and is responsible for Gaelic games in the New York metropolitan area. The county board is also responsible for the New York inter-county teams.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634054695/Pickup/71Fitz3_mcskt1.png",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Thu, November 18, 2021, 08:00 PM",
          // attending: 10,
          eventAttendees: 15,
          locationId: 12,
          ownerId: 5,
          typeId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Forget the Gym",
          description:
            "Tempo workout for runners of all abilities! What's a Tempo workout, you ask?? Well, it's a continuous run where you focus on controlling your pace.Please take note of our attendance policies. You must RSVP in order to attend, masks are voluntary for vaccinated runners but mandatory for unvaccinated participants. RSVP window opens Monday @ 9am.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634075894/Pickup/Screen_Shot_2021-10-12_at_5.57.27_PM_e6plgx.png",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Sun, October 24, 2021, 08:00 AM",
          // attending: 12,
          eventAttendees: 21,
          locationId: 2,
          ownerId: 4,
          typeId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brad's Basketball Bonanza",
          description: "Guaranteed to be an outstanding event",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634093811/Pickup/sunset-g756367851_1920_rykjwt.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Sun, October 24, 2021, 08:00 AM",
          // attending: 11,
          eventAttendees: 15,
          locationId: 3,
          ownerId: 3,
          typeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ultimate Frisbee for Adults",
          description:
            "We're a group of folks who get together and play ultimate frisbee every Sunday in Mccarren Park; rain or shine, year round. The atmosphere is laid back attitude-wise (we don't worry about bounds or counting) but the play is highly athletic. It's a fun, coed game, and all skill levels are welcome. Just show up on Sunday.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634344299/Pickup/frisbee-player-central-park-nyc-keith-thomson_hr6gdh.jpg",
          // time: "11:00 AM to 12:30 PM",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          date: "Thu, October 24, 2021, 11:00 AM",
          // date: "2021/10/01",
          // attending: 4,
          eventAttendees: 8,
          locationId: 5,
          ownerId: 3,
          typeId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Under 21s Tag Rugby",
          description:
            "Tag rugby is great for developing players running, footwork and movement skills without the bruises. Tag / touch rugby is the non-contact version of the sport, requiring players to touch the opponent rather than tackle them. It is suitable for adults or children, for boys and girls or when players of varying skill levels and size play together. Use the tag rugby drills and games (also referred to as touch rugby) to boost your junior players' passing, off-loading, and decision making ability. These youth games and rugby skill development practices are ideal for warm up games for players of all ages.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634347509/Pickup/maleandfemale_wwfi3e.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Sat, October 23, 2021, 11:30 AM",
          // attending: 5,
          eventAttendees: 14,
          locationId: 4,
          ownerId: 2,
          typeId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Group Beach Volleyball Class at Long Island City",
          description:
            "Full Disclosure: This field is pretty tore up. We are grateful to have the permit but it needs major repairs. Discounted $5 game.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634340815/Pickup/Sponsor-HRPK-Volleyball-AVP-12_bsymzi.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Wed, November 17, 2021, 12:00 PM",
          // attending: 5,
          eventAttendees: 5,
          locationId: 4,
          ownerId: 2,
          typeId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Woodlawn Cornhole Tournament",
          description:
            "The bags will fly on the Wildwoods beach (between Wildwood & Oak Avenues) during this double elimination tournament. Teams of two will compete in the popular tailgating bean bag toss game. 10:30am start.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634340932/Pickup/Tennis-2-860x645_e71ivr.png",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Sat, November 23, 2021, 10:30 AM",
          // attending: 7,
          eventAttendees: 16,
          locationId: 14,
          ownerId: 5,
          typeId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //
        {
          name: "Fall Women's Division",
          description:
            "Friendly tennis community that finds you practice partners and improves your game.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634341482/Pickup/tennis_svbc6a.jpg",
          // time: "11:00 AM to 12:30 PM",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          date: "Fri, November 19, 2021, 7:00 PM",
          // date: "2021/10/01",
          // attending: 4,
          eventAttendees: 4,
          locationId: 3,
          ownerId: 1,
          typeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fall Men's Division",
          description:
            "Friendly tennis community that finds you practice partners and improves your game.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634341777/Pickup/DSC_0135_sw8ti4.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Sat, October 23, 2021, 11:30 AM",
          // attending: 5,
          eventAttendees: 4,
          locationId: 3,
          ownerId: 2,
          typeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thursday Night Pickup Football",
          description:
            "Football season certainly makes it easy for New Yorkers and their crews to transition into fall activities. The official kickoff for the NFL season was September 5th, so gather the crowd and head to one of these city hotspots.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634342173/Pickup/448efe02-29bb-47d2-8954-9ce204b5b8e5-10821mf_280_E_brcvbb.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Wed, November 17, 2021, 12:00 PM",
          // attending: 5,
          eventAttendees: 15,
          locationId: 6,
          ownerId: 3,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clontarf Cricket Pickup Group",
          description:
            "The purpose of the club is to provide an opportunity for friendly-level cricketers of all nationalities and backgrounds who live in and around the Manhattan and New York City area a chance to play amatuer cricket and also enjoy a fun social atmosphere within the club.  Our club’s motto is to play hard on the field to win, and enjoy a drink and a few laughs with each other afterwards.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634344753/Pickup/event-cricket-fixtures_gpojbd.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: " Saturday, October 23, 2021, 9:00 AM",
          // attending: 7,
          eventAttendees: 16,
          locationId: 7,
          ownerId: 2,
          typeId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //
        {
          name: "Gaelic Football",
          description:
            "The New York County Board of the Gaelic Athletic Association, or New York GAA, is one of the county boards of the Gaelic Athletic Association outside Ireland, and is responsible for Gaelic games in the New York metropolitan area. The county board is also responsible for the New York inter-county teams.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634344863/Pickup/image_ekbbao.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Tues, November 16, 2021, 06:00 AM",
          // attending: 4,
          eventAttendees: 21,
          locationId: 13,
          ownerId: 4,
          typeId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Halloween Party & Scotch Doubles 8-ball Tournament",
          description:
            "Celebrate Halloween with us at Sharks! We’re playing Scotch Doubles 8-Ball, so find a costume, find a partner (or come solo- we’ll find you a match) and come party at Sharks Palace. Cash prizes, product prizes, discount codes to practice and a chance to be pool royalty. Hosted by Teekay at Sharks Palace.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634347678/Pickup/0f23abc44b35e2e98f44146df838306844284c7fea8673849629bb228b9bc134-rimg-w526-h596-gmir_qprwhj.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Thu, November 18, 2021, 08:00 PM",
          // attending: 10,
          eventAttendees: 15,
          locationId: 12,
          ownerId: 1,
          typeId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "November Project Thursday Morning Run",
          description:
            "Tempo workout for runners of all abilities! What's a Tempo workout, you ask?? Well, it's a continuous run where you focus on controlling your pace.Please take note of our attendance policies. You must RSVP in order to attend, masks are voluntary for vaccinated runners but mandatory for unvaccinated participants. RSVP window opens Monday @ 9am.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634346275/Pickup/uj8vr4gu99fkphbwxd3s_hsqteq.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Thurs, October 28, 2021, 09:00 AM",
          // attending: 12,
          eventAttendees: 21,
          locationId: 1,
          ownerId: 6,
          typeId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saturday Softball Tournament",
          description:
            "Coach Name: James Thompson Team Name: KC Rebels 16A – Soldner Coach Email: jthompson12@gmail.com Age Group: 16U Positions Needed: Pitcher,",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634346322/Pickup/a41fec8d-4678-45f0-b0b9-0dfaaad5ea76-0720-Centennial-City-High-012_jrcxcz.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Sun, October 24, 2021, 08:00 AM",
          // attending: 11,
          eventAttendees: 16,
          locationId: 2,
          ownerId: 6,
          typeId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Manhattan Cycling Club",
          description:
            "We're a group of folks who get together and play ultimate frisbee every Sunday in Mccarren Park; rain or shine, year round. The atmosphere is laid back attitude-wise (we don't worry about bounds or counting) but the play is highly athletic. It's a fun, coed game, and all skill levels are welcome. Just show up on Sunday.",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634346379/Pickup/bike-path-along-the-hudson-river_bwhjhh.jpg",
          // time: "11:00 AM to 12:30 PM",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          date: "Thu, October 24, 2021, 11:00 AM",
          // date: "2021/10/01",
          // attending: 4,
          eventAttendees: 15,
          locationId: 9,
          ownerId: 4,
          typeId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brooklyn Running Club",
          description:
            "Incline workout for runners of all abilities! RSVP window opens Monday @ 9am",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634346489/Pickup/BK-Running-Club-gear-patrol-feautre_dilb6r.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Sat, October 23, 2021, 11:30 AM",
          // attending: 5,
          eventAttendees: 22,
          locationId: 12,
          ownerId: 6,
          typeId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Friendly Table Tennis Championship All Welcome",
          description: "",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634346864/Pickup/ESn3-w1WkAASIaY_kymymm.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Wed, November 17, 2021, 12:06 PM",
          // attending: 5,
          eventAttendees: 14,
          locationId: 10,
          ownerId: 7,
          typeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NYC Friendly Flag Football",
          description: "",
          image:
            "https://res.cloudinary.com/dis83syog/image/upload/v1634347111/Pickup/images_fpwjvo.jpg",
          // time: setTime(faker.date.between("2021-10-23", "2021-11-23")),
          // date: faker.date.between("2021-10-23", "2021-11-23"),
          date: "Sat, November 23, 2021, 10:30 AM",
          // attending: 7,
          eventAttendees: 16,
          locationId: 13,
          ownerId: 8,
          typeId: 16,
          createdAt: new Date(),
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

