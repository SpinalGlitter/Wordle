import algorithmA from "../utils/wordUtils.js";

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
