'use strict'


const express = require('express');
const router = express.Router();

const detail = require('../controllers/detail');

router.get('/detail/:symbol', detail.index);
router.post('/buy/:symbol', detail.buy);
router.post('/sell/:symbol', detail.sell)


module.exports = router;
