const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(203).json({
    status: 203,
    message: "Kikoo",
  });
});

module.exports = router;
