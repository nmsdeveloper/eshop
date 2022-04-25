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
              <div class="products-btn">
                Add cart <i class="uil uil-shopping-bag products-icon"></i>
              </div>
            </div>
          </article>
        `;
  }
  return cards;
}
