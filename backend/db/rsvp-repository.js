
const {RSVP, User} = require("./models");
const {Location} = require("./models")



const listRSVPs = async (eventId) => {
  return await RSVP.findAll({ where: { eventId }, include: Location });
};



module.exports = {
  listRSVPs,
};