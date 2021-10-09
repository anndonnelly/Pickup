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
      locationId: DataTypes.INTEGER,
      ownerId: DataTypes.INTEGER,
      typeId: DataTypes.INTEGER,
    },
    {}
  );
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};