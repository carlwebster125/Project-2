const router = require("express").Router();
const { Character } = require("../models");

router.get("/", async (req, res) => {
  try {
    const characters = await Character.findAll();
    const charactersToSend = characters.slice(0, 3);
    // console.log(charactersToSend);
    res.render("home", {
      locals: { 
        charactersToSend,
       loggedIn: req.session.user,
      },
      partials: {
        partial: "home",
//        partial: "/partials/favorites",
      },
    });
  } catch (e) {
    console.log(e);
    //handle error
  }
});

module.exports = router;
