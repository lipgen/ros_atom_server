const express = require("express");
const app = express();

const port = 8000;

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(allowCrossDomain);
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});
