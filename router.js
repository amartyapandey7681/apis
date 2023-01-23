let express = require('express');

let app = express.Router();

let api = require('./api-functions');

app.get('/getCities',api.cities);
app.get('/getDiseases',api.disease);
app.post('/addData',api.addData);
app.put('/updateData/:userId',api.updateData);
app.get('/getData/:page',api.getData);

module.exports = app;
