const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d"); //get context in 2D

canvas.width = window.innerWidth; // set convas width as windows width
canvas.height = window.innerHeight; // set convas height as windows height

//set line properties
ctx.strokeStyle = "red";
ctx.LineJoin = "round";
ctx.lineCap = "round";

ctx.font = "30px Verdana";
// Create gradient
var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.textAlign = "center";
ctx.fillText(
  "The EARTH without an ART is eh!",
  canvas.width / 2,
  canvas.height / 2
);

//Direction of change widht
let direction = true;
// set max and min width od line
const maxWidth = 50;
const minWidth = 1;
// set drawing flag
let IsDrawing = false;

//  last X and Y point
let lastX = 0;
let lastY = 0;

// hue variable to random select color

let hue = 0;

// draw color line with mouse move
function drawColorfullLine(e) {
  if (!IsDrawing) return; // stopped if is drawing is false

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  //loop hue value between 0 to 360
  if (hue > 360) {
    hue = 0;
  }
  hue++;

  //loop line width between min and max value
  if (ctx.lineWidth >= maxWidth || ctx.lineWidth <= minWidth) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

/*Event Listener */
canvas.addEventListener("mousemove", drawColorfullLine);
canvas.addEventListener("mousedown", e => {
  IsDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (IsDrawing = false));
canvas.addEventListener("mouseout", () => (IsDrawing = false));

canvas.addEventListener("click", function() {
  console.log(this);
  ctx.clearRect(0, 0,canvas.width, canvas.height);
}, {once: true});