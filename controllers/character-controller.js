const { Character } = require("../models");


module.exports = {
  async getAll(req, res) {
    try {
      const characters = await Character.findAll();
      res.render("template", {
        locals: {
          characters,
        },
      });
    } catch (e) {
      console.log(e);
      //handle error
    }
  },
};
