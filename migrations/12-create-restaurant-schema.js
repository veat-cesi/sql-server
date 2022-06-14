"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("restaurant");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropSchema("restaurant");
  },
};
