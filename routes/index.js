'use strict';


const express = require('express');
const router = express.Router();

const index = require('../controllers/');

router.get('/', index.index);

module.exports = router;
