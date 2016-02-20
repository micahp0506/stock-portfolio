'use strict'


const request = require('request');

const storage = require('../services/detail');
const detail = require('../models/detail');

module.exports.index = (req, res) => {
    // Stock symbol for query paramater
    const symbol = req.params.symbol;
    // variable to hold url
    const url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${symbol}`;
    // Making API call
    request.get(url, (err, response, body) => {
        // Error handler
        if (err) throw (err);
        // Parsing ata
        let result = JSON.parse(body);
        // Rendering detail page with data
        res.render('detail', {
            result: result
        });
        // Variable to hold name of stock
        let name = result.Name;
        // Variable to hold symbol of stock
        let symbol = result.Symbol;
        // Variable to hold last price of stock
        let price = result.LastPrice;
        // Storing name, symbol, price temporarily for use in post
        storage.setInfo(name, symbol, price);
    });
};

module.exports.buy = (req, res) => {
    // Getting number of shares to sell form req param
    let shares = req.body.buyQty;
    // Getting stored name of stock
    let name = storage.getName();
    // Getting stored symbol of stock
    let symbol = storage.getSymbol();
    // Getting stored price
    let price = storage.getLastPrice();
    // Creating object to store in the database
    let obj = new detail ({

        name: name,
        symbol: symbol,
        shares: shares,
        price: price

    });
    // Storing new object in database
  obj.save((err, newObj) => {
    if (err) throw (err);
    // Acknowledgement of purchase of stock
    res.send(`<h1>You have purchased ${newObj.shares} shares of ${newObj.name}.</h1>`);
  });


};

module.exports.sell = (req, res) => {
    // Number of shares to sell for query paramater
    let shares = req.body.sellQty;
    // Getting stored name of stock
    let name = storage.getName();
    // Getting stored symbol of stock
    let symbol = storage.getSymbol();
    // Getting stored price of stock
    let price = storage.getLastPrice();


    detail.findOne().sort('-_id').exec((err, doc) => {
        let docShares = parseInt(doc.shares);
        shares = docShares - shares;

        detail.findOne({_id: doc._id}).remove().exec();

        let obj = new detail ({

            name: name,
            symbol: symbol,
            shares: shares,
            price: price

        });

        obj.save((err, newObj) => {
            if (err) throw (err);

            res.send(`<h1>You now have ${shares} shares of ${newObj.name}.</h1>`);
        });
    });
};

