const path = require('path');
const express = require('express');


const app = express(); // better instead
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendfile('index.html', { root: path.join(__dirname, '..', 'site') } );
});

app.listen(80);
