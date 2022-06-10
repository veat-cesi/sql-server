"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("tech");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropSchema("tech");
  },
};
