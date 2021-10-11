'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.TEXT,
      },
      time: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      attending: {
        type: Sequelize.BOOLEAN,
      },
      eventAttendees: {
        type: Sequelize.INTEGER,
      },
      locationId: {
        type: Sequelize.INTEGER,
        references: { model: "Locations" },
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: { model: "Types" },
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};