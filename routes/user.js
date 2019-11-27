const express = require("express");
const router = express.Router();

// send hello to client
router.get("/", (req, res) => {
  res.json("Hello");
});

module.exports = router;
