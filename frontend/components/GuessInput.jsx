export default function GuessInput({ guess, setGuess, handleGuess }) {
  const alphChar = /^[a-zA-Z]+$/.test(guess);

  return (
    <div>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button className="button" onClick={handleGuess} disabled={guess.trim() === "" || !alphChar}>
        Guess
      </button>
    </div>
  );
}
