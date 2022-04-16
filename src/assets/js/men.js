const articlesContent = document.getElementById("articles-content"),
  lists = [
    {
      image: "ensemble (1).png",
      name: "Ensemble",
      price: 14000,
    },
  ];

function listArticles(lst) {
  let cards = "";
  for (let index = 0; index < lst.length; index++) {
    cards += `
            <div class="articles-cards">
              <div class="articles-img">
                <img
                  src="../assets/images/hommes/ensembles/${lst[index].image}"
                  alt=""
                />
              </div>
              <div class="articles-data">
                <h1 class="articles-name">${lst[index].name}</h1>
                <span class="articles-price">
                  ${lst[index].price} Fcfa<i class="uil uil-shopping-bag articles-icon"></i>
                </span>
              </div>
            </div>
        `;
  }
  return cards;
}
articlesContent.innerHTML = listArticles(lists);
