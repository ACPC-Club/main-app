// Import your routes here...
const indexRoutes = require("./indexRoutes");
const eventsRoutes = require("./eventsRoutes");
const galleryRoutes = require("./galleryRoutes");
const projectsRoutes = require("./projectsRoutes");
const contactRoutes = require("./contactRoutes");
const blogRoutes = require("./blogRoutes");
const aboutRoutes = require("./aboutRoutes");
const serviceRoutes = require("./serviceRoutes");
function setupRoutes(app) {
  // Initialize your routes here...
  app.use("/", indexRoutes);
  app.use("/events", eventsRoutes);
  app.use("/gallery", galleryRoutes);
  app.use("/projects", projectsRoutes);
  app.use("/contact", contactRoutes);
  app.use("/blog", blogRoutes);
  app.use("/about", aboutRoutes);
  app.use("/service", serviceRoutes);
  // set up 404

  app.use((req, res) => {
    res.render("404", {
      currentPage: "404",
      user: req.session.user === undefined ? "" : req.session.user,
    });
  });
}

module.exports = { setupRoutes };
