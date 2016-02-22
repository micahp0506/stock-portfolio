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
            let url= `https://finance.yahoo.com/webservice/v1/symbols/${result.symbol}/quote?format=json`;
            // Calling API and returning with requested stock data
            request.get(url, (err, response, body) => {
                // Error handler
                if (err) throw (err);
                // Parsing the body object
                let newResult = JSON.parse(body);
                // Getting  down to level to get needed info
                newResult = newResult.list.resources[0].resource.fields;
                // Variable to hold updated stock price
                let newPrice = newResult.price;
                // Sending updated info to the database
                let query = {_id: id};
                detail.update(query, {price: newPrice}, (err) =>{
                    if (err) throw err
                });
            });
        });
    });
    // Getting the updated data from database and sending it to the portfolio page(index)
    detail.find().exec((err, doc) => {
        // Rendering data to portfolio page
         res.render('portfolio', {
            results: doc
        });
    });
};


