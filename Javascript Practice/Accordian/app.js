const accordians = document.querySelectorAll(".accordian__items");

accordians.forEach((item) => {
  const title = item.querySelector(".accordian__title");
  const content = item.querySelector(".accordian__content");
  item.addEventListener("click", () => {
    //for single accordian at a time
    // for (let i = 0; i < accordians.length; i++) {
    //   if (accordians[i] != item) {
    //     accordians[i].classList.remove("active");
    //   } else {
    //     accordians[i].classList.toggle("active");
    //   }
    // }
    // if (item.classList.contains("active")) {
    //   item.classList.remove("active");
    // } else {
    //   item.classList.add("active");
    // }
    // for multiple accordian at a time
    item.classList.toggle("active");
  });
});
