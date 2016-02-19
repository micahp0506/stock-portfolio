'use strict'


const detail = require('../models/detail');


module.exports.index = (req, res) => {
    detail.find().exec((err, doc) => {
        console.log("docyep", doc);
        res.redirect('/');
    })
}
