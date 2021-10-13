const { User } = require ("./models");
const { Event } = require("./models");

const listMyEvents = async (id) => {
  return await User.findAll({
    
    where: {
      userId: id,
    },
  });
};


module.exports = {
  listMyEvents,
};