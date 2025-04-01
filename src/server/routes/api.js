import express from "express";
import { getRandomWordHandler } from "../controller/gameController.js";

const router = express.Router();
router.get("/word", getRandomWordHandler);
export default router;
