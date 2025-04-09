import { highscores } from "../database/db.js";

export const addHighscores = async (req, res) => {
  try {
    const highscoreData = req.body;
    await highscores.insertOne(highscoreData);
    res.status(201).json({ message: "Highscore added successfully" });
  } catch (error) {
    console.error("Error adding highscore:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
