'use strict';


const express = require('express');
const router = express.Router();

const portfolio = require('./portfolio');
const quote = require('./quote');
const detail = require('./detail');

router.use(portfolio);
router.use(quote);
router.use(detail);

module.exports = router;
