import express from "express";
import { getExamples, addExample } from "../controllers/exampleController.js";

const router = express.Router();

router.get("/", getExamples);
router.post("/", addExample);

export default router; // <-- Use ES Modules export
