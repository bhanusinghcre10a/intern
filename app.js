const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const viewrout = require("./routes/viewroutes");

var cons = require("consolidate");

const app = express();
app.use(bodyParser.json());
app.engine("html", cons.swig);
app.set("views", path.join(__dirname, "src"));
app.set("view engine", "html");

app.use(express.static(path.join(__dirname, "src")));

app.use("/", viewrout);
module.exports = app;
