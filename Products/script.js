const category = document.querySelector(".tab-container");
const productContainer = document.querySelector(".product-container");

//fetch the data
fetch(
  "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
)
  .then((res) => res.json())
  .then((data) => {
    main(data.categories);
  });

//
function main(allProducts) {
  allProducts.forEach((product, index) => {
    const span = document.createElement("span");
    span.textContent = product.category_name;
    span.className = "tab";

    span.addEventListener("click", (e) => {
      showProducts(allProducts, index);

      const tabs = document.querySelectorAll(".tab");
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });

      span.classList.add("active");
    });

    category.appendChild(span);
  });
  showProducts(allProducts, 0);
  const firstTab = document.querySelector(".tab");
  firstTab.classList.add("active");
}

function showProducts(item, index) {
  productContainer.innerHTML = "";
  const id = parseInt(index);
  item[id].category_products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "card";

    const title =
      product.title.length > 15
        ? product.title.substring(0, 15) + "..."
        : product.title;

    let discount =
      ((parseInt(product.compare_at_price) - parseInt(product.price)) /
        parseInt(product.compare_at_price)) *
      100;
    discount = Math.round(discount);

    div.innerHTML = `<div>
        <img src=${product.image} >
        ${
          product.badge_text
            ? `<span class='text'>${product.badge_text}</span>`
            : ""
        }
        <div class='title'>
            <h3>${title}</h3>
            <li>${product.vendor}</li>
        </div>
        <div class='price'>
            <span>Rs ${product.price}</span>
            <span class='grey'><s>${product.compare_at_price}</s></span>
            <span class='red'>${discount}% off</span>
        </div>
        <button class='btn active'>Add to Cart</button>
        <div>
    `;
    productContainer.appendChild(div);
  });
}
