'use strict'

const request = require('request');
const _ = require('lodash');

const detail = require('../models/detail');


module.exports.index = (req, res) => {
    // Getting data from database
    detail.find().exec((err, doc) => {
        // Looping over the individual results
        _.map((doc), (result) => {
            // Setting mongodb id to a variable
            let id = result._id;
            // URL for API
            let url= `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${result.symbol}`;
            // Calling API and returning with requested stock data
            request.get(url, (err, response, body) => {
                // Error handler
                if (err) throw (err);
                // Parsing the body object
                let newResult = JSON.parse(body);
                // Variable to hold updated stock price
                let newPrice = newResult.LastPrice;
                // Sendin updated info to the database
                detail.update({symbol: id}, {price: newPrice}, (err) =>{
                    if (err) throw err
                });
            });
        });
        // Getting the updated data from database and sending it to the portfolio page(index)
        detail.find().exec((err, doc) => {
            res.render('portfolio', {
               results: doc
            });
        });
    });
};


