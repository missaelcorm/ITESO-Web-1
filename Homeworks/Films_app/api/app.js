const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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

app.use(cors({ origin: true })); // Enable CORS (Cross-Origin Resource Sharing)
app.use(express.json());
app.use('', routes);

app.get('', (req, res) => {
    res.send("Request received");
});

mongoose.connect(MONGO_URI).then((client) => {
    app.listen(8080, () => {
        console.log('Server running on port 8080');
    });
}).catch((err) => {
    console.log(err);
});
