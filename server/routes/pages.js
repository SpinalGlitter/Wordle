import { Router } from "express";
import { highscores } from "../database/db.js";

const router = Router();

router.get("/highscore", async (req, res) => {
  try {
    const scores = await highscores.find({}).toArray();
    res.render("highscore", { highscores: scores });
  } catch (error) {
    console.error("Error fetching highscores:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
