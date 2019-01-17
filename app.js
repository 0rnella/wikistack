const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { db } = require('./models');

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send("hello world");
    console.log("hello world");
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});