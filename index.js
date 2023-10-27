const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const port = 3000;

const es6Renderer = require('express-es6-template-engine');
const {Character} = require('./models');
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(express.json());

app.get('/', async (req, res) => {
    const characters = await Character.findAll()
    res.render('template', {
        locals: {
            characters
        }
    })});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});