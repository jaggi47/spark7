'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('./db')
const config = require('config');
const validator = require('./Router/validator')
const routeHandler = require('./Router/routeHandler')

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.post('/api/signup', validator.signUp, routeHandler.signUp);
app.get('/api/getAllMembers',  routeHandler.getAllMembers);

const httpServer = http.createServer(app);

httpServer.listen(config.get('port'), function(err,res) {
    console.log(`Express server listening ${config.get('port')}`)
})
