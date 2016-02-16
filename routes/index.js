'use strict';


const express = require('express');
const router = express.Router();

const quote = require('./quote');

router.use(quote);

module.exports = router;
