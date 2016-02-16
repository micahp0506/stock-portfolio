'use strict'


const express = require('express');
const router = express.Router();

const quote = require('../controllers/quote');

router.use('/', quote.index);

module.exports = router;
