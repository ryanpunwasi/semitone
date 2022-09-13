var express = require("express");
var router = express.Router();

router.get("/:octave/:note", function (req, res, next) {
  const octave = parseInt(req.params.octave);
  const note = req.params.note.toUpperCase();
  const src = `localhost:3000/assets/octave-${octave}/${note}.mp3`;
  return res.json({ octave, note, src });
});

module.exports = router;
