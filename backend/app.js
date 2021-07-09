const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const handleError = require('./middlewares/handleError');
const auth = require('./middlewares/auth');
const { createUser, login } = require('./controllers/users');
const { validateSignUp, validateSignIn } = require('./middlewares/validation');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const NotFoundError = require('./errors/not-found-err');
const { serverUrl, dbName, mongoParams } = require('./utils/constants');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(cookieParser());

const { PORT = 3000 } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${serverUrl}/${dbName}`, mongoParams);
    console.log('База данных MongoDB подключена');
  } catch (err) {
    console.log('Проблемы с подключением к MongoDB', err);
    process.exit(1);
  }
};

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(requestLogger);

const allowedCors = [
  'https://front.mestojuly.nomoredomains.monster',
  'http://front.mestojuly.nomoredomains.monster',
  'localhost:3000'
];

app.use(function(req, res, next) {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  const { method } = req;

  const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

  const requestHeaders = req.headers['access-control-request-headers']; 

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
  } 

  next();
}); 

app.post('/signin', validateSignIn, login);
app.post('/signup', validateSignUp, createUser);

app.use(auth);

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use(errorLogger);

app.use('*', () => {
  throw new NotFoundError('Неверный роутер, страница не найдена');
});

app.use(handleError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
