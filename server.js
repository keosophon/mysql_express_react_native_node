const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(express.json());

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
  const sql = "select * from employee";
  mysqlConnection.query(sql, (err, data) => {
    if (err) return res.json("Cannot get data from server" + err.stack);
    res.json(data);
  });
});

app.listen("8000", () => {
  console.log("server is running");
});
