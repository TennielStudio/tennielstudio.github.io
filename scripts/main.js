const specialToast = document.getElementById("specialToast");
const toaster = document.getElementById("toaster");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x=0;
let y=0;
let vx = 0;
let vy = 0;

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x += vx;
  y += vy;
  ctx.drawImage(specialToast, x, y);
  requestAnimationFrame(update);
}

update();

// myImage.addEventListener("click", changePicture);

// function changePicture() {
//     const mySrc = myImage.getAttribute("src");
//     if (mySrc === "images/toaster.jpg") {
//         myImage.setAttribute("src", "images/cute-toaster.png");
//       } else {
//         myImage.setAttribute("src", "images/toaster.jpg");
//       }
// }