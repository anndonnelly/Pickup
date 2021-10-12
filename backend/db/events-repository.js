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


async function updateEvent(details) {
  const id = details.id;
  delete details.id;
  
  await Event.update(details, {
    where: { id },
    returning: true,
    plain: true,
  });
  return await Event.findByPk(id);
};

async function deleteEvent(eventId) {
  const event = await Event.findByPk(eventId);
  if (!event) throw new Error("Cannot find event");

  await Event.destroy({ where: { id: event.id } });
  return event.id;
}



module.exports = {
  listEvents,
  createEvent,
  listEvent,
  updateEvent,
  deleteEvent,
};


