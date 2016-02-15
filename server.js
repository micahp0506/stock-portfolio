'use strict'


const express = require('express');
const app = express();
const index = require("./routes/");

app.use(index);

app.get('/', (req, res) => {
    res.send('hello world')
});
