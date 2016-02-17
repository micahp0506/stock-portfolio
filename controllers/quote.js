'use strict'


const request = require('request');

module.exports.index = (req, res) => {
    res.render('quote');
}

module.exports.newQuote = (req, res) => {
    // console.log("info", req.body.symbol);
    let symbol = req.body.symbol;
    const url = `http://dev.markitondemand.com/Api/v2/Lookup/json?input=${symbol}`;
    request.get(url, (err, response, body) => {
        // Add 'body' $ 'response' back into argument
        if (err) throw err;
        let result = JSON.parse(body);
        console.log("result", result);
        res.render('quote', {
            title: 'Search Results',
            results: result
        });
    });






    // let symbol;
    // $(document).ready(() => {
    //     $('#button').click(() => {
    //         symbol = $('#symbol').val();
    //         console.log("symbol", symbol);
    //     });
    // });
    // console.log("symbol", symbol);
    // const url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + `${symbol}`;

    // request.get(url, (err, respnse, body) => {
    //     if (err) throw err;
    //     console.log("body", body);
    //     // res.send(JSON.parse(body));
    // });
};


