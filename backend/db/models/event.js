'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      time: DataTypes.INTEGER,
      endTime: DataTypes.INTEGER,
      date: DataTypes.DATE,
      locationId: {
        type: DataTypes.INTEGER,
        references: { model: "Locations" },
      },
      ownerId: {
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
    },
    {}
  );
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};