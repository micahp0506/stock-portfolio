'use strict';


const express = require('express');
const router = express.Router();

const index = require('../controllers/index');

router.post('/', index.index);

module.exports = router;
