const { User } = require ("./models");
const { Event } = require("./models");
const { RSVP } = require("./models");

const listMyHostingEvents = async (id) => {
  return await User.findByPk(id, {
    include: Event,
});
}

const listMyAttendingEvents = async (id) => {
  return await User.findByPk(id, {
    include: "reservations",
  });
};



;

module.exports = {
  listMyHostingEvents,
  listMyAttendingEvents,
};