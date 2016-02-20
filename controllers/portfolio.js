'use strict'


const detail = require('../models/detail');

module.exports.index = (req, res) => {
    // Getiing info from database to render on page
    detail.find().exec((err, doc) => {
        // Rendering data to portfolio page
        res.render('portfolio', {
            results: doc
        });
    });
};

