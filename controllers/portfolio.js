'use strict'


const detail = require('../models/detail');

module.exports.index = (req, res) => {
    detail.find().exec((err, doc) => {
        // console.log("doc", doc);
        // let result = JSON.parse(doc);
        res.render('portfolio', {
            results: doc
        });
    });
};

