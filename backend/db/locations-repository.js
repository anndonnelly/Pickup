const { Location } = require("./models");

const listLocations = async () => {
  return await Location.findAll();
};





module.exports = {
  listLocations
};