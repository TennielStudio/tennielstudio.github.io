let toastBox = document.getElementById('toastBox');
let toastTimeoutMs = 1500;
let toastFadeoutMs = 30;
let isToastDisplayed = false;
const countBread = document.querySelector(".countBread");
const level = document.querySelector(".grade");
let breadCounter = 0;
const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

let happyToastSrc = "images/third-toast.png";

const levels = {
  3: "Connoisseur",
  5: "Aficionado",
  8: "Maestro",
  11: "Master",
  14: "Virtuoso",
  17: "Guru",
  20: "Sensei",
  23: "Legend",
  26: "Underlord",
  29: "Overlord",
  32: "CFO",
  35: "CEO",
  38: "King",
  41: "Kami-sama"
}

function ToastProperty(srcText, altText) {
  this.srcText = srcText;
  this.altText = altText;
}

let toastProperties = [
  new ToastProperty(happyToastSrc, "A piece of cute toast."),
  new ToastProperty("images/burnt-toast.png", "A piece of burnt toast."),
  new ToastProperty("images/banana.png", "A yellow banana.")
]

function showSpecificToast(srcText, altText) {
  console.log("hello?");
  // Creates a toast img on click
  let toast = document.createElement('img');
  toast.classList.add('popup');
  toast.src = srcText;
  toast.alt = altText;
  toastBox.appendChild(toast);

  // Executes a function after a specified delay (function, delay MS)
  setTimeout(()=> {
    var opacity = 1;
    var intervalId = setInterval(function() {
      if (opacity > 0) {
        opacity -= 0.1;
        toast.style.opacity = opacity.toString();
      }
      else {
        clearInterval(intervalId);
        toast.remove();
        isToastDisplayed = false;
      }
    }, toastFadeoutMs);
  }, toastTimeoutMs)
}

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
  const randomIndex = Math.floor(Math.random() * toastProperties.length);

  let toastSrc = toastProperties[randomIndex].srcText;
  let toastAlt = toastProperties[randomIndex].altText;

  showSpecificToast(toastSrc, toastAlt);

  if (toastSrc === happyToastSrc)
  {
    happyToastCount++;
    countBread.innerHTML = happyToastCount;
    if (levels[happyToastCount])
    {
      level.innerHTML = levels[happyToastCount];
      jsConfetti.addConfetti({
        emojis:['🍌']
      });
    }
  }
}
