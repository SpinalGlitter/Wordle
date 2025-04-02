import { getRandomWord } from "./src/server/utils/wordUtils.js";

const word = getRandomWord(5, false);
console.log("Slumpmässigt ord:", word);
