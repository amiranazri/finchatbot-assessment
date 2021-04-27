// index.js

/**
 * Connect to DB
 */
 var mysql = require('mysql');

 var con = mysql.createConnection({
   host: "35.188.180.172",
   user: "root",
   password: "Banana123!"
 });
 
 con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("USE finchatbot_db", function (err, result) {
    if (err) throw err;
    console.log("Database accessd");
  });
});

/**
 * Required External Modules
 */

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));


/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.post('/example', (req, res) => {
  res.send(`${req.body.name} ${req.body.email}.`);
});

app.use(bodyParser.urlencoded({ extended: true })); 

/**
 * Server Activation
 */

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
