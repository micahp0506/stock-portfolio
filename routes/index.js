'use strict';


const express = require('express');
const router = express.Router();

const index = require('../controllers/');

router.use('/', index.index);

module.exports = router;
