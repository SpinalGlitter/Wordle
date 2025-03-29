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
