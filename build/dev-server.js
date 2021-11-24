const path = require('path');
var express=require('express')
var opn = require('opn');
var webpackConfig = require('./webpack.dev.conf');
var app = express();
var port = '8081';


app.use();

module.exports =app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')

    // when env is testing, don't need open it
    // if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
    // }
})


