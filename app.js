const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { db } = require('./models');
const { Page, User } = require("./models/index")

app.use(morgan("short"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send("hello world");
    console.log("hello world");
})

//listening to port
const PORT = 3000;

const init = async () => {
    await User.sync();
    await Page.sync();
    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
}

init()

//database authenticate
db.authenticate().
then(() => {
  console.log('connected to the database');
})



