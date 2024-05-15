const calResult = document.querySelector(".cal__result");
const calValue = document.querySelector(".cal__value");
const allBtn = document.querySelectorAll(".btn");

let val = "";

allBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const current = e.target.textContent;

    if (current === "=") {
      calValue.value = eval(val);
      val = eval(val);
    } else if (current === "AC") {
      calValue.value = "";
      val = "";
      val = "";
    } else if (current === "DEL") {
      const removeLast = val.substring(0, val.length - 1);
      val = removeLast;
      calValue.value = removeLast;
    } else if (current === "%") {
      const calculatedVal = eval(val);
      calValue.value = eval(calculatedVal / 100);
    } else {
      val += current;
      calValue.value = val;
    }
  });
});
