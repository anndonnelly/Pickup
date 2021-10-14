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
        // allowNull: false,
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
      attending: {
        type: DataTypes.BOOLEAN,
      },
      locationId: {
        type: DataTypes.INTEGER,
        references: { model: "Locations" },
      },
      ownerId: {
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      typeId: {
        type: DataTypes.INTEGER,
        references: { model: "Types" },
      },
      eventAttendees: {
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Event.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: "RSVPs",
      otherKey: "userId",
      foreignKey: "eventId",
      as: "reservations",
    };
    Event.belongsToMany(models.User, columnMapping);
    Event.belongsTo(models.Location, { foreignKey: "locationId" });
    Event.belongsTo(models.Type, { foreignKey: "typeId" });
    Event.belongsTo(models.User, { foreignKey: "ownerId" });
    Event.hasMany(models.RSVP, {
      foreignKey: "eventId",
      as: "rsvps",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Event;
};












// User can have many groups
// Groups can have many users
// Event can belong to a group 
// Groups can have many events