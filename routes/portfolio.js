'use strict'


const express = require('express');
const router = express.Router();

const portfolio = require('../controllers/portfolio');

router.use('/', portfolio.index);

module.exports = router;
