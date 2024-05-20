const express = require("express");
const mysql = require("mysql2");
const app = express();

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "crud",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database as ID " + mysqlConnection.threadId);
});

app.get("/", (req, res) => {
  res.json("server is running");
});

app.listen("8000", () => {
  console.log("server is running");
});
