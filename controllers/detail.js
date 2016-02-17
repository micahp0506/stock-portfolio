'use strict'


const request = require('request');

module.exports.index = (req, res) => {
    const symbol = req.params.symbol;
    console.log("symbol", symbol);
    const url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${symbol}`;
    request.get(url, (err, response, body) => {
        if (err) throw (err);
        let result = JSON.parse(body);
        res.render('detail', {
            result: result
        })
        console.log("name", result.Name);
        console.log("symbol", result.Symbol);
        console.log("price", result.LastPrice);
    });
}

// module.exports.new = (req,res) => {

//   let obj = new Contact({
//     name: req.body.name,
//     email:  req.body.email,
//     msg: req.body.message
//   });

//   obj.save((err, newObj) => {
//     if (err) throw (err);

//     res.send(`<h1>Thanks for contacting us ${newObj.name}</h1>`);
//   });
// };
