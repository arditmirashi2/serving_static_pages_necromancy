"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
var path = require("path");
var app = express();
dotenv.config({ path: "../config.conf" });
// Configuring the main template for ejs
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
// Setup static files
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function (req, res, next) {
    res.render("pages/about");
});
var PORT = 3000;
console.log(__dirname);
app.listen(PORT, function () {
    console.log("Server running in port " + PORT);
});
process.addListener("unhandledRejection", function () {
    process.exit(1);
});
