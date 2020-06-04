const route = require("express").Router();

const languageRoute = require("./languages/languages.route");
const frameworkRoute = require("./frameworks/frameworks.route");

route.use("/language", languageRoute);
route.use("/framework", frameworkRoute);

module.exports = route;