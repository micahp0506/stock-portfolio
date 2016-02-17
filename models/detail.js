'use strict'

const mongoose = require('mongoose');

const Detail = mongoose.model('detail', mongoose.Schema
    ({
    name: String,
    symbol: String,
    shares: Number,
    price: Number
}));

module.exports = Detail;
