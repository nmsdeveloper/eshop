const articlesContent = document.getElementById("articles-content"),
  lists = [
    {
      type: "collection",
      image: "ensembles/ensemble (6).png",
      name: "Ensemble 6",
      price: 8500,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (18).png",
      name: "Ensemble 18",
      price: 4000,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (8).png",
      name: "Ensemble 8",
      price: 11000,
    },
    {
      type: "top",
      image: "hauts/haut (6).png",
      name: "Haut 6",
      price: 8000,
    },
    {
      type: "top",
      image: "hauts/haut (2).png",
      name: "Haut 2",
      price: 14000,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (7).png",
      name: "Ensemble 7",
      price: 8000,
    },
    {
      type: "top",
      image: "hauts/haut (8).png",
      name: "Haut 8",
      price: 13500,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (2).png",
      name: "Ensemble 2",
      price: 10000,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (5).png",
      name: "Ensemble 5",
      price: 10500,
    },
    {
      type: "top",
      image: "hauts/haut (9).png",
      name: "Haut 9",
      price: 3500,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (4).png",
      name: "Ensemble 4",
      price: 14500,
    },
    {
      type: "top",
      image: "hauts/haut (13).png",
      name: "Haut 13",
      price: 10000,
    },
    {
      type: "top",
      image: "hauts/haut (11).png",
      name: "Haut 11",
      price: 3500,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (10).png",
      name: "Ensemble 10",
      price: 14000,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (1).png",
      name: "Ensemble 1",
      price: 14000,
    },
    {
      type: "top",
      image: "hauts/haut (5).png",
      name: "Haut 5",
      price: 8500,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (17).png",
      name: "Ensemble 17",
      price: 5000,
    },
    {
      type: "top",
      image: "hauts/haut (1).png",
      name: "Haut 1",
      price: 12000,
    },
    {
      type: "top",
      image: "hauts/haut (10).png",
      name: "Haut 10",
      price: 14000,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (3).png",
      name: "Ensemble 3",
      price: 7500,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (12).png",
      name: "Ensemble 12",
      price: 4500,
    },
    {
      type: "top",
      image: "hauts/haut (12).png",
      name: "Haut 12",
      price: 24000,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (14).png",
      name: "Ensemble 14",
      price: 11000,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (9).png",
      name: "Ensemble 9",
      price: 12000,
    },
    {
      type: "top",
      image: "hauts/haut (3).png",
      name: "Haut 3",
      price: 4000,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (15).png",
      name: "Ensemble 15",
      price: 6000,
    },
    {
      type: "top",
      image: "hauts/haut (14).png",
      name: "Haut 14",
      price: 4500,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (13).png",
      name: "Ensemble 13",
      price: 3000,
    },
    {
      type: "top",
      image: "hauts/haut (15).png",
      name: "Haut 15",
      price: 6000,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (16).png",
      name: "Ensemble 16",
      price: 4500,
    },
    {
      type: "top",
      image: "hauts/haut (4).png",
      name: "Haut 4",
      price: 9000,
    },
    {
      type: "collection",
      image: "ensembles/ensemble (11).png",
      name: "Ensemble 11",
      price: 2500,
    },
    {
      type: "top",
      image: "hauts/haut (7).png",
      name: "Haut 7",
      price: 2500,
    },
  ];

function listArcticle(lst) {
  let cards = "";
  for (let index = 0; index < lst.length; index++) {
    cards += `
        <div class="articles-cards mix ${lst[index].type} f${lst[index].price}">
          <div class="articles-img">
            <img
              src="../assets/images/hommes/${lst[index].image}"
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
articlesContent.innerHTML = listArcticle(lists);

var mixerMens = mixitup(".articles-content", {
  selectors: {
    target: ".articles-cards",
  },
  animation: {
    duration: 500,
  },
});

const filterLink = document.querySelectorAll(".filter-btn"),
  headCollection = document.getElementById("head-collection"),
  headTop = document.getElementById("head-top");

headCollection.onclick = () => filterActive(filterLink[0]);
headTop.onclick = () => filterActive(filterLink[1]);

filterLink.forEach((n) => n.addEventListener("click", () => filterActive(n)));

function filterActive(n) {
  filterLink.forEach((l) => l.classList.remove("filter-active"));
  n.classList.add("filter-active");
}
