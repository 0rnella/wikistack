const express = require("express");
const router = express.Router();
const addPageHTML = require("../views/addPage")


router.get("/", async (req, res, next) => {
    try {
        // res.send("retrieve all wiki pages");
        res.redirect("..")
    } catch (err) {
        next(err);
    }
})

router.post("/", async (req, res, next) => {
    try {
        res.send("just submitted new page to database");
    } catch (err) {
        next (err);
    }
})

router.get("/add", async (req, res, next) => {
    try {
        res.send(addPageHTML());
    } catch (err) {
        next (err);
    }
})



module.exports = router