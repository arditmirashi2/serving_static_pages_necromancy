import express = require("express");

// Importing the ejs template engine
import ejs=require('ejs');

import dotenv = require("dotenv");
import path = require("path");

const app: express.Application = express();

dotenv.config({ path: "../config.conf" });



// Configuring the main template for ejs
app.set('views',path.join(__dirname,'views'));

app.set("view engine", "ejs");

// Setup static files
app.use(express.static(path.join(__dirname,'public')));

app.get("/", (req, res, next) => {
  res.render("pages/about");
});

let PORT = 3000;
console.log(__dirname);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});

process.addListener("unhandledRejection", () => {
  process.exit(1);
});
