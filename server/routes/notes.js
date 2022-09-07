var express = require("express");
var router = express.Router();

router.get("/:octave/", function (req, res, next) {
  const octave = parseInt(req.params.octave);
  return res.json({ octave });
});

module.exports = router;
