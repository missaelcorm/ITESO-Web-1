const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const routes = require('./routes');

const {
    MONGO_PROTOCOL,
    MONGO_HOST,
    MONGO_DB,
    MONGO_USER,
    MONGO_PASS,
} = process.env;

const MONGO_URI = `${MONGO_PROTOCOL}://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`;

app.use('', routes);

app.get('', (req, res) => {
    res.send("Request received lol");
});

mongoose.connect(MONGO_URI).then((client) => {
    app.listen(8080, () => {
        console.log('Server running on port 8080');
    });
}).catch((err) => {
    console.log(err);
});    
