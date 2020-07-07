const route = require("express").Router();

const languageRoute = require("./languages/languages.route");
const frameworkRoute = require("./frameworks/frameworks.route");

route.use("/languages", languageRoute);
route.use("/framework", frameworkRoute);

route.get("/", (_, res) => {
	res.render("index.handlebars", {
		endpoints: [
			{
				method: "GET",
				endpoint: "api/v1/languages/:language",
				desc: "Endpoint for language data",
				note: "Null",
			},
			{
				method: "GET",
				endpoint: "api/v1/languages/:language/features/:feature",
				desc: "Endpoint for login",
				note: "Will be added soon...",
			},
		],
	});
});

module.exports = route;
