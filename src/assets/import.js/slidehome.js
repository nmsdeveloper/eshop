import { listProducts } from "./product.js";
const listsWoman = [
    {
      type: "dress",
      image: "/src/assets/images/femmes/robes/robe (6).png",
      name: "Robe 6",
      price: 8500,
    },
    {
      type: "skirt",
      image: "/src/assets/images/femmes/jupes/jupe (6).png",
      name: "Jupe 6",
      price: 8000,
    },
    {
      type: "skirt",
      image: "/src/assets/images/femmes/jupes/jupe (2).png",
      name: "Jupe 2",
      price: 14000,
    },
    {
      type: "dress",
      image: "/src/assets/images/femmes/robes/robe (7).png",
      name: "Robe 7",
      price: 8000,
    },
    {
      type: "skirt",
      image: "/src/assets/images/femmes/jupes/jupe (8).png",
      name: "Jupe 8",
      price: 13500,
    },
    {
      type: "dress",
      image: "/src/assets/images/femmes/robes/robe (8).png",
      name: "Robe 8",
      price: 11000,
    },
    {
      type: "dress",
      image: "/src/assets/images/femmes/robes/robe (2).png",
      name: "Robe 2",
      price: 10000,
    },
    {
      type: "dress",
      image: "/src/assets/images/femmes/robes/robe (5).png",
      name: "Robe 5",
      price: 10500,
    },
    {
      type: "skirt",
      image: "/src/assets/images/femmes/jupes/jupe (9).png",
      name: "Jupe 9",
      price: 3500,
    },
    {
      type: "dress",
      image: "/src/assets/images/femmes/robes/robe (4).png",
      name: "Robe 4",
      price: 14500,
    },
  ],
  listsMen = [
    {
      type: "collection",
      image: "/src/assets/images/hommes/ensembles/ensemble (6).png",
      name: "Ensemble 6",
      price: 8500,
    },
    {
      type: "collection",
      image: "/src/assets/images/hommes/ensembles/ensemble (18).png",
      name: "Ensemble 18",
      price: 4000,
    },
    {
      type: "collection",
      image: "/src/assets/images/hommes/ensembles/ensemble (8).png",
      name: "Ensemble 8",
      price: 11000,
    },
    {
      type: "top",
      image: "/src/assets/images/hommes/hauts/haut (6).png",
      name: "Haut 6",
      price: 8000,
    },
    {
      type: "top",
      image: "/src/assets/images/hommes/hauts/haut (2).png",
      name: "Haut 2",
      price: 14000,
    },
    {
      type: "collection",
      image: "/src/assets/images/hommes/ensembles/ensemble (7).png",
      name: "Ensemble 7",
      price: 8000,
    },
    {
      type: "top",
      image: "/src/assets/images/hommes/hauts/haut (8).png",
      name: "Haut 8",
      price: 13500,
    },
    {
      type: "collection",
      image: "/src/assets/images/hommes/ensembles/ensemble (2).png",
      name: "Ensemble 2",
      price: 10000,
    },
    {
      type: "collection",
      image: "/src/assets/images/hommes/ensembles/ensemble (5).png",
      name: "Ensemble 5",
      price: 10500,
    },
    {
      type: "top",
      image: "/src/assets/images/hommes/hauts/haut (9).png",
      name: "Haut 9",
      price: 3500,
    },
  ],
  listsChild = [
    {
      type: "boy",
      image: "/src/assets/images/enfants/boys/boy (6).png",
      name: "Garcon 6",
      price: 8500,
    },
    {
      type: "boy",
      image: "/src/assets/images/enfants/boys/boy (8).png",
      name: "Garcon 8",
      price: 11000,
    },
    {
      type: "girl",
      image: "/src/assets/images/enfants/girls/girl (6).png",
      name: "Fille 6",
      price: 8000,
    },
    {
      type: "girl",
      image: "/src/assets/images/enfants/girls/girl (2).png",
      name: "Fille 2",
      price: 14000,
    },
    {
      type: "boy",
      image: "/src/assets/images/enfants/boys/boy (7).png",
      name: "Garcon 7",
      price: 8000,
    },
    {
      type: "girl",
      image: "/src/assets/images/enfants/girls/girl (8).png",
      name: "Fille 8",
      price: 13500,
    },
    {
      type: "boy",
      image: "/src/assets/images/enfants/boys/boy (2).png",
      name: "Garcon 2",
      price: 10000,
    },
    {
      type: "boy",
      image: "/src/assets/images/enfants/boys/boy (5).png",
      name: "Garcon 5",
      price: 10500,
    },
    {
      type: "girl",
      image: "/src/assets/images/enfants/girls/girl (9).png",
      name: "Fille 9",
      price: 3500,
    },
    {
      type: "boy",
      image: "/src/assets/images/enfants/boys/boy (4).png",
      name: "Garcon 4",
      price: 14500,
    },
  ];

const wrapperMen = document.getElementById("wrapper-men"),
  wrapperWoman = document.getElementById("wrapper-woman"),
  wrapperChild = document.getElementById("wrapper-child"),
  slideMore = document.querySelectorAll(".slide-title");

function wrapper(cnt, list) {
  let cards = "";
  for (let i = 0; i < list.length; i++) {
    cards += `
      <div class="swiper-slide">
        <article class="products-cards ${list[i].type}">
          <div class="products-img">
            <img
              src="${list[i].image}"
              alt=""
            />
          </div>
          <div class="products-data">
            <h1 class="products-name">${list[i].name}</h1>
            <h4 class="products-price">
              ${list[i].price} Fcfa
            </h4>
            <div class="products-btn">
              Add cart <i class="uil uil-shopping-bag products-icon"></i>
            </div>
          </div>
        </article>
      </div>
    `;
  }
  return (cnt.innerHTML = cards);
}
wrapper(wrapperMen, listsMen);
wrapper(wrapperWoman, listsWoman);
wrapper(wrapperChild, listsChild);

slideMore[0].onclick = () => {
  window.location.href = "./men.html";
};
slideMore[1].onclick = () => {
  window.location.href = "./woman.html";
};
slideMore[2].onclick = () => {
  window.location.href = "./child.html";
};

new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: 5,
  spaceBetween: 30,

  breakpoints: {
    2067: {
      slidesPerView: 8,
      spaceBetween: 30,
    },
    1067: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    467: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    367: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
