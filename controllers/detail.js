'use strict'


const request = require('request');

const storage = require('../services/detail');
const detail = require('../models/detail');

module.exports.index = (req, res) => {
    const symbol = req.params.symbol;
    // console.log("symbol", symbol);
    const url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${symbol}`;
    request.get(url, (err, response, body) => {
        if (err) throw (err);
        let result = JSON.parse(body);
        res.render('detail', {
            result: result
        })
        let name = result.Name;
        // console.log("name", name);
        let symbol = result.Symbol;
        // console.log("symbol", symbol);
        let price = result.LastPrice;
        // console.log("price", price);
        storage.setInfo(name, symbol, price);
    });
};

module.exports.buy = (req, res) => {
    let shares = req.body.buyQty;
    // console.log("shares", shares);
    let name = storage.getName();
    // console.log("name", name);
    let symbol = storage.getSymbol();
    // console.log("symbol", symbol);
    let price = storage.getLastPrice();
    // console.log("price", price);

    let obj = new detail ({

        name: name,
        symbol: symbol,
        shares: shares,
        price: price

    });

  obj.save((err, newObj) => {
    if (err) throw (err);

    res.send(`<h1>You have purchased ${newObj.shares} shares of ${newObj.name}.</h1>`);
  });


};

module.exports.sell = (req, res) => {
    let shares = req.body.sellQty;
    // console.log(typeof(shares));
    // console.log("shares", shares);
    let name = storage.getName();
    // console.log("name", name);
    let symbol = storage.getSymbol();
    // console.log("symbol", symbol);
    let price = storage.getLastPrice();


    detail.findOne().sort('-_id').exec((err, doc) => {
        // console.log("doc", doc);
        // console.log(typeof(doc.shares));
        let docShares = parseInt(doc.shares);
        shares = docShares - shares;
        // console.log("shares", shares);

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

