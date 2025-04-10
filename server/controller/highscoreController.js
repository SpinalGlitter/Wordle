import { Highscore } from "../models/Highscore.js";

export const addHighscores = async (req, res) => {
  try {
    const { name, guesses, correctWord, wordLength, uniqueLetters, duration } =
      req.body;

    if (
      !name ||
      !correctWord ||
      typeof guesses !== "number" ||
      typeof wordLength !== "number" ||
      typeof uniqueLetters !== "boolean" ||
      typeof duration !== "number"
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newScore = new Highscore({
      correctWord,
      name,
      guesses,
      wordLength,
      duration,
      uniqueLetters,
    });

    await newScore.save();
    console.log("Highscore saved:", newScore);

    res.status(201).json({ message: "Highscore added successfully" });
  } catch (error) {
    console.error("Error adding highscore:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
