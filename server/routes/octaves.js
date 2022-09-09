const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  return res.json({ 1: [], 2: [], 3: [], 4: [], 5: [] });
});

router.get("/:octave", function (req, res, next) {
  const octave = parseInt(req.params.octave);
  const notes = [];
  const json = {};
  json[octave] = notes;
  return res.json(json);
});

module.exports = router;
