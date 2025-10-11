import express from "express";
import Transaction from "../models/Transaction.js";
import {categorizeTransaction} from "../services/aiservices.js"

const router = express.Router();

//create new
router.post("/", async (req, res) => {
  try {
    const { description, amount, date, userId } = req.body;
    const { category, tags, isAnomaly, categorySource } =
      await categorizeTransaction(description, amount);

    const transaction = new Transaction({
      userId: userId || "default user",
      description,
      amount,
      category,
      date: date || Date.now(),
      isAnomaly,
      tags,
      categorySource,
    });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    console.error("POST /transactions Error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

//get all
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    console.error("GET /transactions Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
