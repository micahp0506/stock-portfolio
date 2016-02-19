'use strict';


const express = require('express');
const router = express.Router();

const portfolio = require('./portfolio');
const quote = require('./quote');
const detail = require('./detail');
const update = require('./update');

router.use(portfolio);
router.use(quote);
router.use(detail);
router.use(update);

module.exports = router;
