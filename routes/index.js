'use strict';


const express = require('express');
const router = express.Router();

const portfolio = require('./portfolio');

router.use(portfolio);

module.exports = router;
