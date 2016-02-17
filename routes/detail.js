'use strict'


const express = require('express');
const router = express.Router();

const detail = require('../controllers/detail');

router.get('/detail/:symbol', detail.index);

module.exports = router;
