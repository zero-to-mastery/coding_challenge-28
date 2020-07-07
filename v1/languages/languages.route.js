const route = require("express").Router();

route.get("/:language", (req, res) => {
  console.log(req.params)
  const currentLanguage = require(`../../json/languages/${req.params.language}/${req.params.language}`);
  res.send(currentLanguage)
});

route.get("/:language/features/:feature", (req, res) => {
  const currentFeature = require(`../../v1/languages/${req.params.language}/${req.params.feature}`);
  res.send(currentFeature);
});

module.exports = route;