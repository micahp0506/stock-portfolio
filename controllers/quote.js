'use strict'


const request = require('request');

module.exports.index = (req, res) => {
    // Intial render of quote page
    res.render('quote');
}

module.exports.newQuote = (req, res) => {
    // Varaible to hold query param
    let symbol = req.body.symbol;
    // URL for API
    const url = `http://dev.markitondemand.com/Api/v2/Lookup/json?input=${symbol}`;
    // Making request ot API for selected stock
    request.get(url, (err, response, body) => {
        // Error handler
        if (err) throw err;
        // Parsing returned data
        let result = JSON.parse(body);
        // Rendering info to quote page
        res.render('quote', {
            title: 'Search Results',
            results: result
        });
    });
};


