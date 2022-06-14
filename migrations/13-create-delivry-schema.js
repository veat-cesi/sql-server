"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("delivry");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropSchema("delivry");
  },
};
