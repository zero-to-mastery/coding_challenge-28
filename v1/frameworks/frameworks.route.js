const route = require("express").Router();

route.get("/:framework", (req, res) => {
  console.log(req.params)
  const currentFramework = require(`../../json/framework/${req.params.frameworks}/${req.params.framework}`);
  res.send(currentFramework)
});

module.exports = route;