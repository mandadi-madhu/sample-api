const express = require('express');
const products = require('./products');

const app = express();

app.get('/products', (req, res) => {
    const prod = new products();
    res.send(prod.getProducts());
});

module.exports = app;