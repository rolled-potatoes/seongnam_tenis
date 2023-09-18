const express = require('express');
const placesRouter = require('./places');

const router = express.Router();

router.use('/places', placesRouter);

module.exports = router;
