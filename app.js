const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { db } = require('./models');
const { Page, User } = require("./models/index")

//middleware to get morgan(logging), public(stylesheets) and bodyparser(decoding urls)
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

//middleware for routes
app.use("/user", require("./routes/user"))
app.use("/wiki", require("./routes/wiki"))

//homepage
app.get("/", (req, res) => {
    res.send("hello world");
    console.log("hello world");
})


//listening to port and syncing
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



