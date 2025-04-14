import { Router } from "express";
import { Highscore } from "../models/Highscore.js";

const router = Router();
router.get("/highscore", async (req, res) => {
  try {
    const scores = await Highscore.find().sort({ guesses: 1 }).limit(10);
    res.render("highscore", { highscores: scores });
  } catch (error) {
    console.error("Error fetching highscores:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
