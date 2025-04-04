import express from "express";
import { getRandomWordHandler, validateGuess} from "../controller/gameController.js";


const router = express.Router();

router.get("/word", getRandomWordHandler);
router.post("/guess", validateGuess);

export default router;
