let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let port = process.env.PORT || 3001;
let clientRoute = require("./routes/client");
let adminRoute = require("./routes/admin");

mongoose.connect("mongodb://127.0.0.1:27017/lagarto", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, function () {
      console.log("Server listening port " + port);
    });
  }
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization-X-API-KEY,origin, X-Requested-With,Content-Type,Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Allow", "GET,PUT,POST,DELETE,OPTIONS");
  next();
});
app.use("/api", clientRoute);
app.use("/api", adminRoute);

module.exports = app;
