const express = require("express");
const router = express.Router();

app.get("/", async (req, res, next) => {
    try {
        res.send("retrieve all wiki pages");
    } catch (err) {
        next(err);
    }
})

app.post("/", async (req, res, next) => {
    try {
        res.send("just submitted new page to database");
    } catch (err) {
        next (err);
    }
})

app.get("/add", async (req, res, next) => {
    try {
        res.send("retrieved the add a page form");
    } catch (err) {
        next (err);
    }
})



module.exports = {
    router
}