const route = require("express").Router();

const languageRoute = require("./languages/languages.route");
const frameworkRoute = require("./frameworks/frameworks.route");

route.use("/language", languageRoute);
route.use("/framework", frameworkRoute);

route.get('/', (_, res) => {
  res.render("index.handlebars", {
    layout: 'index.handlebars',
    endpoints: [
      {
        method: "GET",
        endpoint: "v1/language/:language",
        desc: "Endpoint for language data",
        note: "Null"
      },
      {
        method: "GET",
        endpoint: "v1/language/:language/lang-features/:feature",
        desc: "Endpoint for login",
        note: "Will be added soon..."
      }
    ]
  });
});


module.exports = route;