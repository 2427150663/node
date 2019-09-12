var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function (req, res) {

    request('https://read.qidian.com/chapter/f6t259lp9JZwy7E0qeXDZQ2/vOf_1EKAlx_gn4SMoDUcDQ2', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body);
            res.write($('body').html());
        }
    })
});

var server = app.listen(3000, function () {
    console.log('listening at 3000');
});