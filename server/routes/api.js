import express from "express";
import {
  getRandomWordHandler,
  validateGuess,
} from "../controller/gameController.js";
import { addHighscores } from "../controller/highscoreController.js";

const router = express.Router();

router.get("/word", getRandomWordHandler);
router.post("/guess", validateGuess);
router.post("/highscore", addHighscores);

export default router;
