const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');

const router = require('./router')

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/api', router);

const httpServer = http.createServer(app);

httpServer.listen(3000, function(err,res) {
    console.log(`Express server listening on PORT 3000`)
})