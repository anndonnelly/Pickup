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

const createRSVP = async (details) => {
  return await RSVP.create(details)
}

const deleteRSVP = async(detials) => {
  const rsvp = await RSVP.findByPk(detials);
  if (!rsvp) throw new Error("RSVP does not exist")
  return await rsvp.destroy();
}

module.exports = {
  listMyHostingEvents,
  listMyAttendingEvents,
  createRSVP,
  deleteRSVP,
};