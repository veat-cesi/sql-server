"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("delivery");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropSchema("delivery");
  },
};
