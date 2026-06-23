export default function toUpperCaseWord(str) {
  newWord = str
    .split(" ")
    .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
    .join(" ");
  return newWord;
}
