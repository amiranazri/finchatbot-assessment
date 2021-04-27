var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.188.180.172",
  user: "root",
  password: "Banana123!"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("USE DATABASE finchatbot_db", function (err, result) {
    if (err) throw err;
    console.log("Database accessd");
  });
});
