import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Välkommen till startsidan!");
});

export default router;
