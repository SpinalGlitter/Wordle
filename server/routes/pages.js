import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Välkommen till startsidan!");
});

router.get("/highscore", (req, res) => {
  res.render("highscore", { highscores: []});
});

export default router;
