import { getRandomWord } from "./src/server/utils/wordUtils.js";

const word = getRandomWord(6, false);
console.log("Slumpmässigt ord:", word);