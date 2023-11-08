const router = require("express").Router();
const { Character } = require("../models");

router.get("/", async (req, res) => {
  try {
    const characters = await Character.findAll();
    const charactersToSend = characters.slice(0, 3);
    // console.log(charactersToSend);
    res.render("template", {
      locals: { 
        charactersToSend,
       loggedIn: req.session.user,
      },
      partials: {
        partial: "/partials/home",
//        partial: "/partials/favorites",
      },
    });
  } catch (e) {
    console.log(e);
    //handle error
  }
});

module.exports = router;
