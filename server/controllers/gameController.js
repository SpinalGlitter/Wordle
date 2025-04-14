import algorithmA from "../utils/wordUtils.js";
import { getRandomWord } from "../utils/wordUtils.js";

export const getRandomWordHandler = (req, res) => {
  const length = Number(req.query.length);
  const unique = req.query.unique === "true";

  try {
    const word = getRandomWord(length, unique);
    res.json({ word });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const validateGuess = (req, res) => {
  const { guess, word } = req.body;

  try {
    const result = algorithmA(guess, word);
    const isCorrect = guess.toLowerCase() === word.toLowerCase();

    res.json({ result, isCorrect });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
