'use strict'


const request = require('request');

module.exports.index = (req, res) => {
    res.render('quote');
}

module.exports.newQuote = (req) => {
    // Add 'res' back into the argument
    // console.log("info", req.body.symbol);
    let symbol = req.body.symbol;
    const url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + `${symbol}`;
    request.get(url, (err) => {
        // Add 'body' $ 'response' back into argument
        if (err) throw err;
        // console.log("Symbol", body.Symbol);
        // console.log("Name", body.Name);
        // console.log("LastPrice", body.LastPrice);
        // res.send(JSON.parse(body));
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


