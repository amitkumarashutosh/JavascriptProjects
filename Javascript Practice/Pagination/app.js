const result = document.querySelector(".result");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const paginate = document.querySelector(".paginate");
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  if (body.classList.contains("active")) {
    body.classList.remove("active");
    toggle.textContent = "Dark Mode";
  } else {
    body.classList.add("active");
    toggle.textContent = "Light Mode";
  }
});

let currentPage = 0;
let totalPages = 0;
(async function () {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    const data = await res.json();
    totalPages = 100;
  } catch (error) {}
})();

const fetchInitialData = async (currentPage) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${currentPage * 10}`
    );
    const data = await res.json();
    totalPage = data.total / 10;
    displayProducts(data.products);
    dispalayPaginate(data.total / 10);
  } catch (error) {
    console.log("error while fetching the data");
  }
};

const displayProducts = (products) => {
  result.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product__container";
    div.innerHTML = `
            <img src=${product.thumbnail} alt=${product.title} class='product__thumbnail'/>
            <div class="product__details">
                <span>${product.title}</span>
                <span>Rs.${product.price}</span>
            </div>
        `;
    result.appendChild(div);
  });
};

const dispalayPaginate = (pages) => {
  for (let i = 1; i <= pages; i++) {
    const button = document.createElement("button");
    button.className = "paginate__button";
    button.id = i;
    button.textContent = i;
    paginate.appendChild(button);
  }
};

fetchInitialData(currentPage);

prevBtn.addEventListener("click", () => {
  fetchInitialData(--currentPage);
});
nextBtn.addEventListener("click", () => {
  fetchInitialData(++currentPage);
});

//popup
const popup = document.querySelector(".message__container");
const messageBtn = document.querySelector(".message__btn");
const close = document.querySelector(".message__close");

messageBtn.addEventListener("click", () => {
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
});
close.addEventListener("click", () => {
  popup.style.display = "none";
});
