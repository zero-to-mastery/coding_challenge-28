const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3007;

const v1Routes = require("./v1/index");

// added path for static assets
app.use(express.static(path.join(__dirname, "views", "static")));

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.set("view engine", "handlebars");
app.engine(
	"handlebars",
	handlebars({
		defaultLayout: "layout",
		layoutsDir: path.join(__dirname, "views"),
	})
);

app.use("/v1", v1Routes);

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
