const yellow = "yellow";
const blue = "blue";
const wrapper = document.getElementById("wrapper");
const boxElements = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn = yellow;

resetButton.onclick = startGame;

function checkWin() {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return boxElements[index].classList.contains(turn);
    });
  });
}

function checkDraw() {
  return [...boxElements].every((box) => {
    return box.classList.contains(yellow) || box.classList.contains(blue);
  });
}

function placeMark(box, currentClass) {
  box.classList.add(currentClass);
}

function handleTurn() {
  turn = turn !== yellow ? yellow : blue;
}

function endGame(){
  boxElements.forEach(box => {
    box.removeEventListener("click", handleClick, { once: true });
  });
}

function handleClick(e) {
  const boxTarget = e.target;

  placeMark(boxTarget, turn);
  if (checkWin()) {
    console.log(`winner is ${turn}`);
    wrapper.append(`winner is ${turn}`)
    endGame();
  } else if (checkDraw()) {
    console.log(`the game is draw`);
  }

  handleTurn();
}

function startGame() {
  boxElements.forEach((box) => {
    box.classList.remove(yellow);
    box.classList.remove(blue);
    box.addEventListener("click", handleClick, { once: true });
  });
}

startGame();
