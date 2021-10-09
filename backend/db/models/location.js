'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      zipCode: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Location.associate = function(models) {
    // associations can be defined here
  };
  return Location;
};