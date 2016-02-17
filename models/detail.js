'use strict'

const mongoose = require('mongoose');

const Detail = mongoose.model('detail', mongoose.Schema
    ({
    name: String,
    symbol: String,
    shares: String,
    price: String
}));

module.exports = Detail;
