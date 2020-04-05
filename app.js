const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startButton = document.getElementsByClassName("btn-reset");
let missed = 0;

// listen for the start game button to be pressed
startButton.addEventListener(
  "click",
  () => (document.getElementById("overlay").style.display = "none")
);

let phrases = [
  "baba booey",
  "hit em with the hein",
  "hey now",
  "a sheep in sheeps clothing",
  "zero point zero"
];

// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
  let newPhrases = Math.floor(Math.random() * arr.length);
  return arr[newPhrases].split("");
};

getRandomPhraseAsArray(phrases);

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {};

addPhraseToDisplay(phraseArray);

// check if a letter is in the phrase
const checkLetter = button => {};

// check if the game has been won or lost
const checkWin = () => {};

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener("click", e => {});
