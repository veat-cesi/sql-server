"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("customer");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropSchema("customer");
  },
};
