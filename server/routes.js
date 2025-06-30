const express = require("express");
const router = express.Router();
const { getCollection } = require("./models/index");
const { ObjectId } = require("mongodb");


router.get("/facts", async (req, res) =>{
    const collection = getCollection();
    const facts = await collection.find({}).toArray();
    
    res.status(200).json(facts);
});

router.post("/facts", async (req, res) =>{
    const collection = getCollection();
    let { fact } = req.body;

    fact = JSON.stringify(fact);

    const newFact = await collection.insertOne({ fact, status: false });

    res.status(201).json({ fact, status: false, _id: newFact.insertedId});
});

router.delete("/facts/:id", async (req, res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);

    const deletedFact = await collection.deleteOne({ _id });
    res.status(200).json(deletedFact);
});

router.put("/facts/:id", async (req, res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);
    const { status } = req.body;

    if (typeof status !== "boolean"){
        return res.status(400).json({mssg: "invalid status"});
    }
    
    const updatedFact = await collection.updateOne({ _id }, { $set: { status: !status}});
    res.status(200).json(updatedFact);
});

module.exports = router;