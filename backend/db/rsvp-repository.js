
const {RSVP, User} = require("./models")


const listRSVPs = async (eventId) => {
  return RSVP.findAll();
};



module.exports = {
  listRSVPs,
};