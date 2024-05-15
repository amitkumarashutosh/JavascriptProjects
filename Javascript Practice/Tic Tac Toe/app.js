let arr = Array(9).fill(null);
let current = "X";
const winner = document.querySelector(".winner");
const container = document.querySelector(".container");
const reset = document.querySelector(".reset");

container.style.display = "block";
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    const id = parseInt(e.target.id);
    if (arr[id] !== null) return;
    e.target.textContent = current;
    arr[id] = current;
    checkWinner();
    current = current === "X" ? "O" : "X";
  });
});

const checkWinner = () => {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    winner.textContent = `${current} is winner`;
    resetGame();
  }
  if (!arr.some((el) => el === null)) {
    winner.textContent = `Draw game `;
    resetGame();
  }
};

const resetGame = () => {
  container.style.display = "none";
  reset.innerHTML = `<button class='reset__btn'>Reset Game</button>`;
  reset.addEventListener("click", () => {
    location.reload();
  });
};
