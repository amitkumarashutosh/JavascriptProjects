//hex color

const hexValue = document.querySelector(".hex__value");
const hexBtn = document.querySelector(".hex__btn");
const hexContainer = document.querySelector(".hex__color");

hexBtn.addEventListener("click", () => {
  const colors = "0123456789ABCDEF";
  let generatedColor = "#";
  for (let i = 1; i <= 6; i++) {
    let index = Math.floor(Math.random() * colors.length);
    generatedColor += colors[index];
  }
  hexValue.textContent = generatedColor;
  hexContainer.style.backgroundColor = generatedColor;
});

//rgb color

const rgbValue = document.querySelector(".rgb__value");
const rgbBtn = document.querySelector(".rgb__btn");
const rgbContainer = document.querySelector(".rgb__color");
const green = document.getElementById("green");
const red = document.getElementById("red");
const blue = document.getElementById("blue");

rgbBtn.addEventListener("click", () => {
  let color = `rgb(${red.value},${green.value},${blue.value})`;
  rgbContainer.style.background = color;
  rgbValue.textContent = color;
});
