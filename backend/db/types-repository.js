const { Type } = require("./models");

const listTypes = async () => {
  return await Type.findAll();
};

module.exports = {
  listTypes,
};
