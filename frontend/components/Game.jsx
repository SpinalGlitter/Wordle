import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GuessInput from "./GuessInput";
import GuessResult from "./GuessResult";
import HighscoreForm from "./HighscoreForm";
import Button from "./Button";


export default function Game() {
  const [correctWord, setCorrectWord] = useState("");
  const [guess, setGuess] = useState("");
  const [results, setResults] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [wordLength, setWordLength] = useState(5);
  const [uniqueLetters, setUniqueLetters] = useState(false);

  const fetchWord = () => {
    fetch(
      `http://localhost:5080/api/word?length=${wordLength}&unique=${uniqueLetters}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCorrectWord(data.word);
        setStartTime(new Date().getTime());
        setResults([]);
        setGuess("");
        setIsCorrect(false);
        console.log("New word: ", data.word);
      })
      .catch((error) => {
        console.error("Error trying to fetch word:", error);
      });
  };

  useEffect(() => {
    fetchWord();
  }, []);

  const handleGuess = () => {
    fetch("http://localhost:5080/api/guess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ guess, word: correctWord }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResults([...results, data.result]);
        setGuess("");
        if (data.isCorrect) {
          setIsCorrect(true);
        }
      })
      .catch((error) => {
        console.error("Error trying to fetch API:", error);
      });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchWord();
        }}
        style={{ marginBottom: "20px" }}
      >
        <label>
          Number of characters:
          <input
            type="number"
            max="10"
            min="3"
            onChange={(e) => setWordLength(Number(e.target.value))}
            value={wordLength}
            style={{ width: "3rem", marginLeft: "0.5rem" }}
          />
        </label>

        <label style={{ marginLeft: "1rem" }}>
          <input
            type="checkbox"
            checked={uniqueLetters}
            onChange={(e) => setUniqueLetters(e.target.checked)}
          />
          Only unique letters
        </label>

        <button type="submit" style={{ marginLeft: "1rem" }} className="button">
          New Game
        </button>
      </form>

      {!isCorrect ? (
        <>
          <GuessInput
            guess={guess}
            setGuess={setGuess}
            handleGuess={handleGuess}
          />
          <GuessResult results={results} />
        </>
      ) : (
        <HighscoreForm
          duration={Math.floor((new Date().getTime() - startTime) / 1000)}
          guesses={results.length}
          wordLength={correctWord.length}
          uniqueLetters={new Set(correctWord).size === correctWord.length}
          correctWord={correctWord}
        />
      )}
      <Link to="/highscore">
        <Button>Highscore</Button>
      </Link>
    </div>
  );
}
