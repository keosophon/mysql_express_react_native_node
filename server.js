const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(express.json());

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "crud",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

mysqlPool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database as ID " + connection.threadId);
  connection.release(); // Release the connection back to the pool
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM employee";
  mysqlPool.query(sql, (err, data) => {
    if (err) {
      console.error("Cannot get data from server: " + err.stack);
      return res
        .status(500)
        .json({ error: "Cannot get data from server" + err.stack });
    }
    res.json(data);
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
