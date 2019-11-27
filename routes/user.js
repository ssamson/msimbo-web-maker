const express = require("express");
const router = express.Router();

// send hello to client
router.get("/", (req, res) => {
  res.json("Hello from server");
});

router.get("/123", (req, res) => {
  res.json("hello from 123");
});

module.exports = router;
