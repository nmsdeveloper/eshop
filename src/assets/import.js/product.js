export function listProducts(lst) {
  let cards = "";
  for (let index = 0; index < lst.length; index++) {
    cards += `
          <article class="products-cards ${lst[index].type}">
            <div class="products-img">
              <img
                src="${lst[index].image}"
                alt=""
              />
            </div>
            <div class="products-data">
              <h1 class="products-name">${lst[index].name}</h1>
              <h4 class="products-price">
                ${lst[index].price} Fcfa
              </h4>
              <button class="products-btn">
                <span class="add-to-cart">Add to cart</span>
                <span class="added">Added</span>
                <i class="uil uil-shopping-cart"></i>
                <i class="uil uil-box"></i>
              </button>
            </div>
          </article>
        `;
  }
  return cards;
}

export function addCart(clsName = "products-btn") {
  const cartButtons = document.querySelectorAll(".products-btn");

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");
    });
  });
}
