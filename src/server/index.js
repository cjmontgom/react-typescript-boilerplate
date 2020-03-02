"use strict";
exports.__esModule = true;
var config_1 = require("../config");
var express_1 = require("express");
// import express module
var app = express_1["default"]();
// create an express application. Object will have the methods for routing HTTP requests (verbs, url patterns etc)
//app.use(express.static("dist"));
// configured to serve the static files from dist directory.
app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", config_1.clientUrl); // update to match the domain you will make the request from
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/api/getUsername', function (_req, res) { return res.send({ username: 'chloe' }); });
// route definition. Callback to be invoked whenever there is a get req with this path, relative to site root
app.listen(8080, function () { return console.log("Listening on port 8080!"); });
// starts the backend server on specified port
