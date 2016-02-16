'use strict';


const express = require('express');
const router = express.Router();

const index = require('../controllers/');

router.post('/', index.index);

module.exports = router;
