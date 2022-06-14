"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("client");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropSchema("client");
  },
};
