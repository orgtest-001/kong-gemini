const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ title: "Express" });
});

router.get("/health", function (req, res, next) {
  res.json({ message: "OK" });
});

module.exports = router;
