import fs from "fs";
import path from "path";

const wordsPath = path.join(
  process.cwd(),
  "src",
  "server",
  "data",
  "words_alpha.txt"
);

const words = fs
  .readFileSync(wordsPath, "utf-8")
  .split("\n")
  .map((word) => word.trim().toLowerCase())
  .filter((word) => word.length > 0);

export function getRandomWord(length, unique) {
  let filtered = words.filter((word) => word.length === length);
  if (unique) {
    filtered = filtered.filter((word) => new Set(word).size === word.length);
  }
  if (filtered.length === 0) {
    throw new Error(
      `No words found with length ${length} and unique letters: ${unique}`
    );
  }
  const randomWord = filtered[Math.floor(Math.random() * filtered.length)];

  return randomWord;
}

export default function algorithmA(guess, correct) {
  guess = guess.toLowerCase();
  correct = correct.toLowerCase();

  if (!alphChar(guess) || !alphChar(correct)) {
    throw new Error("Invalid input, only alphabetic characters allowed");
  }

  const result = [];
  const guessLetters = guess.split("");
  const correctLetters = correct.split("");
  const letterCount = {};

  correctLetters.forEach((letter) => {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });

  guessLetters.forEach((letter, index) => {
    if (letter === correctLetters[index]) {
      result.push({ letter, result: "correct" });
      letterCount[letter]--;
    } else {
      result.push(null);
    }
  });

  guessLetters.forEach((letter, index) => {
    if (result[index] === null) {
      if (letterCount[letter] > 0) {
        result[index] = { letter, result: "misplaced" };
        letterCount[letter]--;
      } else {
        result[index] = { letter, result: "incorrect" };
      }
    }
  });

  return result;
}

export function alphChar(word) {
  return /^[a-zåäö]+$/i.test(word);
}
