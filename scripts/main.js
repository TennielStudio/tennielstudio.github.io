let toastBox = document.getElementById('toastBox');
let toastTimeoutMs = 1500;
let isToastDisplayed = false;

function showHappyToast() {
  // Creates a toast img on click
  let toast = document.createElement('img');
  toast.classList.add('popup');
  toast.src = "images/happy-toast.png";
  toast.alt = "A piece of cute toast."
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
  toastBox.appendChild(banana);

  // Executes a function after a specified delay (function, delay MS)
  setTimeout(()=> {
    banana.remove();
    isToastDisplayed = false;
  }, toastTimeoutMs)
}

const storeToastPopups = [showHappyToast, showBurntToast, showBananas];

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
}