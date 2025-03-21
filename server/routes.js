const express = require("express");
const router = express.Router();



router.get("/facts", (req, res) =>{
    res.status(200).json({mssg: "Get Request to /api/facts"});
});

router.post("/facts", (req, res) =>{
    res.status(201).json({mssg: "Post Request to /api/facts"});
});

router.delete("/facts/:id", (req, res) => {
    res.status(200).json({mssg: "Delete Request to api/facts"})
});

router.put("/facts/:id'", (req, res) => {
    res.status(200).json({mssg: "Put Request to api/facts"})
});

module.exports = router;