const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const port = 3000;
const indexRouter = require('./routes');
const characterRouter = require('./routes/characters');
const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(indexRouter);
app.use(characterRouter);
app.use(express.static('public'));
app.use(express.json());

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});