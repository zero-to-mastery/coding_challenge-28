const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3007;

const v1Routes = require("./v1/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/v1", v1Routes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});