'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING
  }, {});
  Type.associate = function(models) {
    // associations can be defined here
    Type.hasMany(models.Event, {
      foreignKey: "typeId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Type;
};