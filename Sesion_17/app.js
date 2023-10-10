const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send("Request received lol");
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});