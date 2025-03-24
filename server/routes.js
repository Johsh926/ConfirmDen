const express = require("express");
const router = express.Router();
const { getCollection } = require("./models/index")


router.get("/facts", async (req, res) =>{
    const collection = getCollection();
    const facts = await collection.find({}).toArray();
    
    res.status(200).json(facts);
});

router.post("/facts", async (req, res) =>{
    const collection = getCollection();
    const { fact } = req.body;

    const newFact = await collection.insertOne({ fact, status:false });

    res.status(201).json({ fact, status: false, _id: newFact.insertedId});
});

router.delete("/facts/:id", async (req, res) => {
    res.status(200).json({mssg: "Delete Request to api/facts"})
});

router.put("/facts/:id", async (req, res) => {
    res.status(200).json({mssg: "Put Request to api/facts"})
});

module.exports = router;