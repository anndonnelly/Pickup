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
    RSVP.belongsTo(models.Event, { foreignKey: "eventId" });
    RSVP.belongsTo(models.User, { foreignKey: "userId" });
  };
  return RSVP;
};

