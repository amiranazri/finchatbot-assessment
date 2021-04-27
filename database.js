var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "Banana123!"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE finchatbot-db", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
