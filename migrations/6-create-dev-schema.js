"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("dev");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropSchema("dev");
  },
};
