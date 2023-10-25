const express = require('express');
const mongoose = require('mongoose');

const app = express();

const routes = require('./routes');

const mongoPass = 'om9GMj5erhyTN4Hc';
const mongoUrl = `mongodb+srv://robertocortes:${mongoPass}@cluster0.a2ffsre.mongodb.net/todos?retryWrites=true&w=majority`;

app.use('', routes);

app.get('', (req, res) => {
    res.send("Request received lol");
});

mongoose.connect(mongoUrl).then((client) => {
    app.listen(8080, () => {
        console.log('Server running on port 8080');
    });
}).catch((err) => {
    console.log(err);
});    
