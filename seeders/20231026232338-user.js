"use strict";

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
          password: "password123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Blue",
          lastName: "Bell",
          email: "bbell@test.com",
          password: "password123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Silver",
          lastName: "Soul",
          email: "ssoul@test.com",
          password: "password123",
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
