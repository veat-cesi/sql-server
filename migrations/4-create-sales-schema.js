"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("sales");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropSchema("sales");
  },
};
