"use strict";
const slugs = window.slugs;

// elements
const screen = document.getElementById("screen");
const wrapper = document.getElementById("wrapper");
const switchElement = document.getElementById("switch");
const alertContainer = document.querySelector("[data-alert-container]");
const guessGrid = document.querySelector("[data-guess-grid]");
const keyboard = document.querySelector("[data-keyboard]");
const timer = document.querySelector(".countdown-timer");

// variables
let mode = "dark";
let quibMD5 = "";
let permutedQuib = "";

// dates for retreiving daily quib
const date1 = new Date("04/15/2023");
const date2 = new Date();
const difference = date2.getTime() - date1.getTime();
const days = Math.ceil(difference / (1000 * 3600 * 24));

(function () {
  fetch(`https://api.quotable.io/quotes/${slugs[days]}`)
    .then((response) => response.json())
    .then((response) => setData(response))
    .catch((err) => console.error(err));

  const totalGames = window.localStorage.getItem("totalGames") || 0;
  window.localStorage.setItem("totalGames", Number(totalGames) + 1);
})();

// event listener for toggling light/dark mode
switchElement.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.remove("dark-mode");

  if (mode === "light") {
    mode = "dark";
  } else {
    mode = "light";
  }
  lightDarkMode();
});

// light/dark mode toggle function
function lightDarkMode() {
  const bgcolor = getComputedStyle(document.documentElement).getPropertyValue(
    "--bgcolor"
  );
  const fgcolor = getComputedStyle(document.documentElement).getPropertyValue(
    "--fgcolor"
  );
  document.documentElement.style.setProperty("--bgcolor", fgcolor);
  document.documentElement.style.setProperty("--fgcolor", bgcolor);
}

// function to create permuted alphabet
function shuffle(string) {
  const a = string.split("");
  const n = a.length;

  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

// update stats on win
function updateStats(totalSolved) {
  const totalSolvedElement = document.getElementById("total-solved");
  totalSolvedElement.innerText = totalSolved;
}

// setup game
function setData(data) {
//   console.log(data); // don't look, cheater!
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const permuted = shuffle(alphabet);

  updateStats(window.localStorage.getItem("totalSolved") || 0);

  quibMD5 = md5(
    (data.content + " " + data.author)
      .replace(/\s+/g, " ")
      .toLowerCase()
      .split(" ")
      .join("")
  );

  permutedQuib = `${(data.content + " " + data.author).toLowerCase()}`;

  let i = 0;
  let result = "";
  while (i < permutedQuib.length) {
    let ind = alphabet.indexOf(permutedQuib.charAt(i));
    result += permuted.charAt(ind) || permutedQuib.charAt(i);
    i++;
  }

  permutedQuib = result;
  init();
}

// display navigation modals
function display(modal) {
  screen.classList.toggle("hide");
  wrapper.classList.toggle("hide");
  document.getElementById(modal).classList.toggle("hide");
}

// close navigation modals
function closed(modal) {
  screen.classList.toggle("hide");
  wrapper.classList.toggle("hide");
  document.getElementById(modal).classList.toggle("hide");
}

// initialize game
function init() {
  lightDarkMode();

  // split quib into an array of words
  const wordsArray = createWords(permutedQuib);
  for (let word of wordsArray) {
    const div = document.createElement("div");
    div.className = "word";
    guessGrid.appendChild(div);
  }

  // loop through words with createLetterTile and wrap in word class div
  const wordElements = document.querySelectorAll(".word");
  for (let i = 0; i < wordsArray.length; i++) {
    for (let letter of wordsArray[i]) {
      createLetterTile(wordElements[i], letter.toUpperCase());
    }
    const div = document.createElement("div");
    const tile = document.createElement("div");
    div.className = "space";
    tile.className = "tile hidden opacity";
    div.appendChild(tile);
    wordElements[i].appendChild(div);
  }

  // begin
  startInteraction();
}

// split string into an array of words
function createWords(string) {
  return string.split(" ");
}

// create tiles, watch for new lines
function createLetterTile(parentDiv, letter) {
  const div = document.createElement("div");
  const tile = document.createElement("button");
  div.className = "letter";
  tile.className = "tile";
  div.dataset.letter = letter;
  div.innerHTML = letter;

  if (letter.toUpperCase() === letter.toLowerCase()) {
    tile.className = "tile hidden";
    if (letter === "\n") {
      tile.className = "tile hidden opacity";
    }
    tile.dataset.letter = letter;
    tile.innerHTML = letter;
  }

  div.appendChild(tile);
  parentDiv.appendChild(div);
}

// allow user interaction
function startInteraction() {
  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleKeyPress);
}

// disable user interaction
function stopInteraction() {
  document.removeEventListener("click", handleMouseClick);
  document.removeEventListener("keydown", handleKeyPress);
}

// mouse (on-screen keyboard) input function
function handleMouseClick(e) {
  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key.toLowerCase());
    return;
  }
  if (e.target.matches("[data-enter]")) {
    submitGuess();
    return;
  }
  if (e.target.matches("[data-delete]")) {
    deleteKeys();
    return;
  }
  // clicked a tile box, add active dataset state to all matches
  if (e.srcElement.matches(".tile")) {
    removeAllActiveTiles();

    // get letter data from parent node of guess
    const letter = e.srcElement.parentNode.getAttribute(["data-letter"]);

    setAllActiveTiles(letter);
  }
}

// keyboard input function
function handleKeyPress(e) {
  if (e.key === "Enter") {
    submitGuess();
    return;
  }
  if (e.key === "Backspace" || e.key === "Delete") {
    deleteKeys();
    return;
  }
  if (e.key.match(/^[a-z]$/)) {
    pressKey(e.key);
    return;
  }
}

// input key function
function pressKey(key) {
  const activeTiles = getActiveTiles();

  // active tiles have a letter, remove used from keyboard
  if (activeTiles[0]?.dataset.letter) {
    const keyboardKey = keyboard.querySelector(
      `[data-key="${activeTiles[0].dataset.letter}"i]`
    );
    keyboardKey.classList.toggle("used");
  }

  // check if letter is already guessed, if so it must be removed from the other tiles
  const guessedLetters = getGuessedLetters();
  if (guessedLetters.includes(key.toUpperCase())) {
    const removeTiles = getGuessTiles(key);
    for (let tile of removeTiles) {
      tile.textContent = "";
      delete tile.dataset.state;
      delete tile.dataset.letter;
    }
  }

  // set all active tiles to letter guess
  for (let tile of activeTiles) {
    tile.dataset.letter = key.toLowerCase();
    tile.textContent = key;
  }

  // update keyboard, darken used key
  const keyboardKey = keyboard.querySelector(`[data-key="${key}"i]`);
  keyboardKey.classList.add("used");

  // set active tiles to next empty tile (exclude 'space' tiles)
  const nextTile = guessGrid.querySelector(
    ":not([data-letter]):not(.hidden):not(.word):not(.space)"
  );
  removeAllActiveTiles();
  setAllActiveTiles(nextTile?.parentNode.getAttribute(["data-letter"]));
}

// remove all occurrences of guessed letter
function deleteKeys() {
  const activeTiles = getActiveTiles();

  if (activeTiles == null) return;
  const keyboardKey = keyboard.querySelector(
    `[data-key="${activeTiles[0].dataset.letter}"i]`
  );
  keyboardKey?.classList.toggle("used");
  for (let tile of activeTiles) {
    tile.textContent = "";
    delete tile.dataset.state;
    delete tile.dataset.letter;
  }
}

// get all occurrences of guesssed letter
function getGuessTiles(letter) {
  return guessGrid.querySelectorAll(`[data-letter="${letter}"]`);
}

// get all currently active tiles
function getActiveTiles() {
  return guessGrid.querySelectorAll('[data-state="active"]');
}

// get all letter tiles
function getLetterTiles() {
  return document.querySelectorAll(".tile:not(.opacity)");
}

// remove all currently active tiles
function removeAllActiveTiles() {
  const activeTiles = getActiveTiles();

  for (let tile of activeTiles) {
    delete tile.dataset.state;
  }
}

// sets all locations of a letter to active
function setAllActiveTiles(letter) {
  // find all same letters (returns nodelist)
  const letterLocations = document.querySelectorAll(
    `[data-letter='${letter}']`
  );

  // change all children tiles values to guess
  for (let node of letterLocations) {
    node.firstElementChild.dataset.state = "active";
  }
}

// returns letters that have been used already
function getGuessedLetters() {
  const keyboardKeys = keyboard.querySelectorAll(".used");
  let letters = [];

  for (let keyboardKey of keyboardKeys) {
    letters.push(keyboardKey.dataset.key);
  }

  return letters;
}

// stop interaction and check for win
function submitGuess() {
  stopInteraction();
  checkWinLose(getGuess());
}

// function to get guess string
function getGuess() {
  // query select all tiles add up everything to a guess string
  const tiles = document.querySelectorAll(".tile:not(.opacity)");
  let guess = "";

  for (let tile of tiles) {
    guess += tile.dataset.letter;
  }
  return guess;
}

// check for win
function checkWinLose(guess) {
  if (md5(guess) === quibMD5) {
    showAlert("You Win!", 5000);
    danceTiles(getLetterTiles());

    const totalSolved = window.localStorage.getItem("totalSolved") || 0;
    window.localStorage.setItem("totalSolved", Number(totalSolved) + 1);

    updateStats(totalSolved);

    return;
  }

  // else keep trying alert, restart interaction
  showAlert("Keep Trying...", 3000);
  shakeTiles(getLetterTiles());
  startInteraction();
}

// keep trying animation
function shakeTiles(tiles) {
  tiles.forEach((tile) => {
    tile.classList.add("shake");
    tile.addEventListener(
      "animationend",
      () => {
        tile.classList.remove("shake");
      },
      { once: true }
    );
  });
}

// you win animation
function danceTiles(tiles) {
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("dance");
      tile.addEventListener(
        "animationend",
        () => {
          tile.classList.remove("dance");
        },
        { once: true }
      );
    }, (index * 50) / 5);
  });
}

// show alerts
function showAlert(message, duration = 1000) {
  const alert = document.createElement("div");
  alert.textContent = message;
  alert.classList.add("alert");
  alertContainer.prepend(alert);
  if (duration == null) return;
  setTimeout(() => {
    alert.classList.add("hide");
    alert.addEventListener("transitionend", () => {
      alert.remove();
    });
  }, duration);
}

// show timer
function showTimer() {
  let d = new Date();
  d.setHours(24, 0, 0, 0);
//   timer.innerHTML = d;
}
showTimer();
