"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Characters",
      [
        {
          name: "Charmander",
          type: "Fire",
          weakness: "Water",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Squirtle",
          type: "Water",
          weakness: "Grass",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bulbasaur",
          type: "Grass",
          weakness: "Fire",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pidgey",
          type: "Flying",
          weakness: "Rock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Geodude",
          type: "Rock",
          weakness: "Ground",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ghastly",
          type: "Ghost",
          weakness: "Dark",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ekans",
          type: "Poison",
          weakness: "Ground",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Seel",
          type: "Water",
          weakness: "Electric",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Abra",
          type: "Psychic",
          weakness: "Dark",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Snorlax",
          type: "Normal",
          weakness: "Fighting",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Characters", null, {});
  },
};
