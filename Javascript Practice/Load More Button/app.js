const result = document.querySelector(".result");
const loadBtn = document.querySelector(".load__btn");

let currentPage = 0;

const fetchInitialData = async (currentPage) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${currentPage * 10}`
    );
    const data = await res.json();
    if (data.total <= currentPage * 10) {
      loadBtn.setAttribute("disabled", true);
      return;
    }
    displayProducts(data.products);
  } catch (error) {
    console.log("error while fetching the data");
  }
};

const displayProducts = (products) => {
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

loadBtn.addEventListener("click", () => {
  fetchInitialData(currentPage++);
});
