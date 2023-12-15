const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout:100000,
  defaultCommandTimeout:100000,

  e2e: {
    setupNodeEvents(on, config) {      
    },
  },
});
