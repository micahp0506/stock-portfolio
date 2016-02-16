'use strict'


const express = require('express');
const router = express.Router();

const detail = require('../controllers/detail');

router.get('/detail', detail.index);

module.exports = router;
