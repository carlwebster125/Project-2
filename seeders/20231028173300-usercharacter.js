"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UserCharacters",
      [
        {
          userId: 1,
          characterId: 1,
        },
        {
          userId: 1,
          characterId: 3,
        },
        {
          userId: 3,
          characterId: 2,
        },
        {
          userId: 2,
          characterId: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserCharacters", null, {});
  },
};
