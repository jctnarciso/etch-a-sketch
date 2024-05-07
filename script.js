let grid = document.querySelector("div.grid");

for (let i = 0; i < (600/15)**2; i++) {
  let cell = document.createElement("div");
  cell.classList.toggle("cell");
  grid.appendChild(cell);
}

function getOpacity(element) {
  let styles = getComputedStyle(element);
  return styles.opacity;
}

function incrementOpacity(element) {
  let currentOpacity = +getOpacity(element);
  element.style.opacity = currentOpacity + 0.2;
}

let cells = document.querySelectorAll(".cell");

cells.forEach(cell => cell.addEventListener("mouseover", function() {
  incrementOpacity(cell);
}));