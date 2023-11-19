require('module-alias/register')
const cors = require('cors')
const express = require('express');
const path = require('path');
const enviroment = process.env.NODE_ENV;
const config = require(path.resolve('src', `env.${enviroment}.json`));

const app = express();

Object.entries(config).forEach(([key, value]) => {
  process.env[key] = value;
});

app.use(cors())
const apiRouter = require('./routes');
app.use('/api', apiRouter);
app.use(express.static('react-app/dist'));

app.listen(process.env.PORT, () => {
  console.log('server on');
});

