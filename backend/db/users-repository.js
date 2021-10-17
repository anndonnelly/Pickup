const { User } = require ("./models");
const { Event } = require("./models");
const { RSVP } = require("./models");
const { Location } = require("./models");

const listMyHostingEvents = async (id) => {
  return await User.findByPk(id, {
    include: {
      model: Event,
      as: "reservations",
      include: Location,
    },
});
}

const listMyAttendingEvents = async (id) => {
  return await User.findByPk(id, {
    include: {
      model: Event,
      as: "reservations",
      include: Location,
    },
  });
};

const createRSVP = async (details) => {
  return await RSVP.create(details)
}

const deleteRSVP = async(userId, eventId) => {
  const rsvp = await RSVP.findOne({
    where: {userId: userId, eventId: eventId}});
  if (!rsvp) throw new Error("RSVP does not exist")
  await rsvp.destroy();
  return rsvp.id
}

module.exports = {
  listMyHostingEvents,
  listMyAttendingEvents,
  createRSVP,
  deleteRSVP,
};