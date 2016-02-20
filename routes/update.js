'use strict'


const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/update');

router.get('/update', ctrl.index);


module.exports = router;
