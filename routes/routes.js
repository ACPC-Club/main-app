// Import your routes here...
const indexRoutes = require("./indexRoutes");
const eventsRoutes = require("./eventsRoutes");
const galleryRoutes = require("./galleryRoutes");
const causesRoutes = require("./causesRoutes");
const contactRoutes = require("./contactRoutes");

function setupRoutes(app) {
  // Initialize your routes here...
  app.use("/", indexRoutes);
  app.use("/events", eventsRoutes);
  app.use("/gallery", galleryRoutes);
  app.use("/causes", causesRoutes);
  app.use("/contact", contactRoutes);
  // set up 404

  app.use((req, res) => {
    res.render("404", {
      currentPage: "404",
      user: req.session.user === undefined ? "" : req.session.user,
    });
  });
}

module.exports = { setupRoutes };
