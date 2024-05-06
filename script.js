let grid = document.querySelector("div.grid");

// function getContentWidth(element) {
//   let styles = getComputedStyle(element);

//   return element.clientWidth -
//   parseFloat(styles.paddingLeft) -
//   parseFloat(styles.paddingRight);
// }

// function getContentHeight(element) {
//   let styles = getComputedStyle(element);

//   return element.clientHeight -
//   parseFloat(styles.paddingLeft) -
//   parseFloat(styles.paddingRight);
// }

for (let i = 0; i < 900; i++) {
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
  return currentOpacity + 0.1;
}