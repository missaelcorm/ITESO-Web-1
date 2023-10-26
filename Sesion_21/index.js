const express = require('express');
const path = require('path');

const routes = require('./src/routes');

const app = express();

const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use("/assets", express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
