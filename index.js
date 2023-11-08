const http = require('http');
const express = require('express');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user')
const es6Renderer = require('express-es6-template-engine');
const db = require('./models');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({ db: db.sequelize });
const app = express();
const server = http.createServer(app);
const port = 3005;

const characterRouter = require('./routes/characters');

store.sync();


const indexRouter = require('./routes');

app.use(express.static('public'));
app.use(express.json());


app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store,
    cookie: {
      secure: false,
      maxAge: 2592000,
    },
  })
);


app.use(indexRouter);
app.use(characterRouter);


app.use(userRouter);


server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});