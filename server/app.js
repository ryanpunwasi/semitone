const express = require("express");
const path = require("path");
const logger = require("morgan");

const octavesRouter = require("./routes/octaves");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/octaves", octavesRouter);

module.exports = app;
