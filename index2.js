const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const port = 3000;
const characterRouter = require('./routes/characters');
//const charLikesRouter = require('./routes/char-likes');
const { Character } = require("./models");
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(characterRouter);
//app.use('/favorites',charLikesRouter)
app.use(express.static('public'));
app.use(express.json());
// ------------------------- ROUTES ---------------------------
app.get("/home", async(req, res) => {
  try {
    const characters = await Character.findAll();
    const charactersTosend= characters.slice(0,3)
    console.log(characters)
    res.render("home", {
      locals: {
        charactersTosend,
      },
    });
  } catch (e) {
    console.log(e);
    //handle error
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});