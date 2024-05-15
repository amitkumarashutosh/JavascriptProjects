const tabs = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const id = e.target.dataset.tab;
    const element = document.getElementById(id);

    content.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });
});
