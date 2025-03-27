import express from "express";
import { createQuery, deleteQuery, getAllQuery } from "../controllers/query.js";

const router = express.Router();

router.post("/create", createQuery);
router.get("/", getAllQuery);
router.delete("/delete/:id", deleteQuery);

export default router;
