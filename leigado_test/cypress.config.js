const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1900,
  viewportHeight: 1000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
