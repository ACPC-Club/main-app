// Import your routes here...
const indexRoutes = require("./indexRoutes");

function setupRoutes(app) {
  // Initialize your routes here...
  app.use("/", indexRoutes);
}

module.exports = { setupRoutes };
