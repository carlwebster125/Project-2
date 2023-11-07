"use strict";
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Red",
          lastName: "Rover",
          email: "rrover@test.com",
          password: await bcrypt.hash('password123',10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Blue",
          lastName: "Bell",
          email: "bbell@test.com",
          password: await bcrypt.hash('password123',10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Silver",
          lastName: "Soul",
          email: "ssoul@test.com",
          password: await bcrypt.hash('password123',10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
