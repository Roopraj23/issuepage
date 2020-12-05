const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express(); 

app.use(cors());
app.use(express.json());//middleware
app.use(bodyparser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "issueDatabse"
}); 

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM issue";
    db.query(sqlSelect, (err, result) => {
      res.send(result);
    });
  });

  app.post("/api/insert", (req, res) => {
    const userName = req.body.userName;
    const issue = req.body.issue;
  
    const sqlInsert = "INSERT INTO issue (name, issue) VALUES (?, ?)";
    db.query(sqlInsert, [userName, issue], (err, result) => {
      console.log(err);
    });
  });

app.listen(3001, () => {
    console.log("Server is runing on 3001...!");
   });