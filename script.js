let grid = document.querySelector("div.grid");

function getContentWidth (element) {
  let styles = getComputedStyle(element);

  return element.clientWidth -
  parseFloat(styles.paddingLeft) -
  parseFloat(styles.paddingRight);
}

function getContentHeight (element) {
  let styles = getComputedStyle(element);

  return element.clientHeight -
  parseFloat(styles.paddingLeft) -
  parseFloat(styles.paddingRight);
}

console.log(getContentWidth(grid));