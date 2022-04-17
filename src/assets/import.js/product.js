export function listProducts(lst) {
  let cards = "";
  for (let index = 0; index < lst.length; index++) {
    cards += `
          <article class="products-cards mix ${lst[index].type} f${lst[index].price}">
            <div class="products-img">
              <img
                src="${lst[index].image}"
                alt=""
              />
            </div>
            <div class="products-data">
              <h1 class="products-name">${lst[index].name}</h1>
              <span class="products-price">
                ${lst[index].price} Fcfa<i class="uil uil-shopping-bag products-icon"></i>
              </span>
            </div>
          </article>
        `;
  }
  return cards;
}
