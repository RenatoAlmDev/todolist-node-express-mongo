const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.render("pages/index"); // render serve para devolver as views
});

module.exports = router;
