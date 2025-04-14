import express from "express";
import {
  getRandomWordHandler,
  validateGuess,
} from "../controllers/gameController.js";
import { addHighscores } from "../controllers/highscoreController.js";

const router = express.Router();

router.get("/word", getRandomWordHandler);
router.post("/guess", validateGuess);
router.post("/highscore", addHighscores);

export default router;
