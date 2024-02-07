let toastBox = document.getElementById('toastBox');
let toastTimeoutMs = 1500;
let isToastDisplayed = false;
const countBread = document.querySelector(".countBread");
const level = document.querySelector(".grade");
let breadCounter = 0;

const levels = {
  3: "Novice",
  5: "Connoisseur",
  8: "Maestro",
  11: "Master",
  14: "Virtuoso",
  17: "Guru",
  20: "Sensei",
  23: "Legend",
  26: "Overlord",
  29: "CEO",
  32: "King",
  35: "Kami-sama"
}

function showHappyToast() {
  // Creates a toast img on click
  let toast = document.createElement('img');
  toast.classList.add('popup');
  toast.src = "images/happy-toast.png";
  toast.alt = "A piece of cute toast."
  toast.style.width = '100%';
  toastBox.appendChild(toast);

  // Executes a function after a specified delay (function, delay MS)
  setTimeout(()=> {
    toast.remove();
    isToastDisplayed = false;
  }, toastTimeoutMs)
}

function showBurntToast() {
  // Creates a toast img on click
  let toast = document.createElement('img');
  toast.classList.add('popup');
  toast.src = "images/burnt-toast.jpeg"; // change this one
  toast.alt = "A piece of burnt toast." // change this one in param
  toast.style.width = '100%';
  toastBox.appendChild(toast);

  // Executes a function after a specified delay (function, delay MS)
  setTimeout(()=> {
    toast.remove();
    isToastDisplayed = false;
  }, toastTimeoutMs)
}

function showBananas() {
  // Creates a img on click
  let banana = document.createElement('img');
  banana.classList.add('popup');
  banana.src = "images/banana.jpg"; // change this one
  banana.alt = "A piece of burnt toast." // change this one in param
  banana.style.width = '100%';
  toastBox.appendChild(banana);

  // Executes a function after a specified delay (function, delay MS)
  setTimeout(()=> {
    banana.remove();
    isToastDisplayed = false;
  }, toastTimeoutMs)
}

const storeToastPopups = [showHappyToast, showBurntToast, showBananas];
const happyToastIdx = 0;
let happyToastCount = 0;

function showToast() {
  // If toast is dispalyed, do not allow more toasts to populate
  if (isToastDisplayed) {
    return;
  }

  isToastDisplayed = true;
  
  // Play toaster sound - must come first for timing purposes
  var audio = new Audio('audio/toasteraudio.mp3');
  audio.play();

  // Randomly choose which toaster pop up image to pick
  const randomIndex = Math.floor(Math.random() * storeToastPopups.length);

  // Show the toaster image
  storeToastPopups[randomIndex]();

  if (randomIndex === happyToastIdx)
  {
    happyToastCount++;
    countBread.innerHTML = happyToastCount;
    if (levels[happyToastCount])
    {
      level.innerHTML = levels[happyToastCount];
    }
  }
}

// const toastBoxContainer = document.getElementById('toastBoxContainer');
// const imgContainer = document.getElementById('imgContainer');

// toastBoxContainer.style.height = imgContainer.style.height + '35%';
