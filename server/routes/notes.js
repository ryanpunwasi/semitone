var express = require("express");
var router = express.Router();

router.get("/:octave/:note", function (req, res, next) {
  const octave = parseInt(req.params.octave);
  const note = req.params.note;
  return res.json({ octave, note, src: null });
});

module.exports = router;
