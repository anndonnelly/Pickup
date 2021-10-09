'use strict';
module.exports = (sequelize, DataTypes) => {
  const RSVP = sequelize.define('RSVP', {
    eventId: {
      type: DataTypes.INTEGER, 
      references: { model: "Events" }},
    userId: {
      type: DataTypes.INTEGER,
      references: { model: "Users" }}
  }, {});
  RSVP.associate = function(models) {
    // associations can be defined here
  };
  return RSVP;
};