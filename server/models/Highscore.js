import mongoose from "mongoose";

const highscoreSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  correctWord: { type: String, required: true },
  guesses: { type: Number, required: true, min: 1 },
  wordLength: { type: Number, required: true },
  uniqueLetters: { type: Boolean, required: true },
  duration: { type: Number, required: true },
});

export const Highscore = mongoose.model("Highscore", highscoreSchema);