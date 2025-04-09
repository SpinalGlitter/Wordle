import { useState } from "react";
import { API_URL } from "../config.js";

export default function HighscoreForm({
  duration,
  guesses,
  wordLength,
  uniqueLetters,
  correctWord,
}) {
  const [name, setName] = useState("");

  const submitHighscore = () => {
    fetch(`${API_URL}/api/highscore`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        duration,
        guesses,
        wordLength,
        uniqueLetters,
      }),
    })
    .then(() => (window.location.href = "/highscore"));
    console.log(data);
  };
  return (
    <div>
      <h2>Congratulations!</h2>
      <h3>You guessed the correct word, {correctWord}!</h3>
      <p>Your time: {duration} seconds</p>
      <p>Guesses: {guesses}</p>
      <p>Number of charachters: {wordLength}</p>
      <p>Unique letters: {uniqueLetters ? "Yes" : "No"}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={submitHighscore}>Submit Highscore</button>
    </div>
  );
}
