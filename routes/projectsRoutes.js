const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("projects", {
    currentPage: "projects",
    user: req.session.user === undefined ? "" : req.session.user,
  });
});

module.exports = app;
