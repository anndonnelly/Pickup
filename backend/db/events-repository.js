const { Event } = require("./models");

const listEvents = async () => {
  return await Event.findAll();
};


const createEvent = async (details) => {
  const addEvent = await Event.create(details)
  return addEvent;
};


module.exports = {
  listEvents,
  createEvent,
};


