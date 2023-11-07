const { Character, User } = require("../models");
const userId = req.session.user.id;

module.exports = {
  async getAll(req, res) {
    try {
      const characters = await Character.findAll();
      res.render("template", {
        locals: {
          characters,
        },
        partials: {
          partial: "/partials/characters",
//          partial: "/partials/favorites",
        },
      });
    } catch (e) {
      console.log(e);
      //handle error
    }
  },
  async getAllByUserId(req, res) {
    const id = 1;

    try {
      const user = await User.findByPk(id, {
        order: [[{ model: Character, as: "characters" }, "name", "asc"]],
        include: {
          model: Character,
          as: "characters",
          attributes: ["id", "name", "type", "weakness"],
          through: {
            attributes: [],
          },
        },
      });
      console.log(user);
      res.render("template", {
        locals: {
          characters: user.characters,
        },
      });
    } catch (e) {
      console.log(e);
      //handle error
    }
  },
};
