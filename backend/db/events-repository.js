const { Event } = require("./models");

const listEvents = async () => {
  return await Event.findAll();
};

const listEvent = async (id) => {
  return await Event.findByPk(id);
};

const createEvent = async (details) => {
  const addEvent = await Event.create(details)
  return addEvent;
};

module.exports = {
  listEvents,
  createEvent,
  listEvent,
};


