import { listProducts } from "../import.js/product.js";

const articlesContent = document.getElementById("products-content"),
  lists = [
    {
      type: "child",
      image: "../assets/images/enfants/enfant (4).png",
      name: "Haut 6",
      price: 8000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (5).png",
      name: "Haut 2",
      price: 14000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (25).png",
      name: "Haut 3",
      price: 4000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (3).png",
      name: "Ensemble 8",
      price: 11000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (2).png",
      name: "Ensemble 18",
      price: 4000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (23).png",
      name: "Ensemble 14",
      price: 11000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (24).png",
      name: "Ensemble 9",
      price: 12000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (20).png",
      name: "Ensemble 3",
      price: 7500,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (1).png",
      name: "Ensemble 6",
      price: 8500,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (21).png",
      name: "Ensemble 12",
      price: 4500,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (22).png",
      name: "Haut 12",
      price: 24000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (8).png",
      name: "Ensemble 2",
      price: 10000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (9).png",
      name: "Ensemble 5",
      price: 10500,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (10).png",
      name: "Haut 9",
      price: 3500,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (6).png",
      name: "Ensemble 7",
      price: 8000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (16).png",
      name: "Haut 5",
      price: 8500,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (7).png",
      name: "Haut 8",
      price: 13500,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (18).png",
      name: "Haut 1",
      price: 12000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (14).png",
      name: "Ensemble 10",
      price: 14000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (15).png",
      name: "Ensemble 1",
      price: 14000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (19).png",
      name: "Haut 10",
      price: 14000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (17).png",
      name: "Ensemble 17",
      price: 5000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (11).png",
      name: "Ensemble 4",
      price: 14500,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (12).png",
      name: "Haut 13",
      price: 10000,
    },
    {
      type: "child",
      image: "../assets/images/enfants/enfant (13).png",
      name: "Haut 11",
      price: 3500,
    },
  ];

articlesContent.innerHTML = listProducts(lists);

var mixerChild = mixitup(".products-content", {
  selectors: {
    target: ".products-cards",
  },
  animation: {
    duration: 500,
  },
});

// const filterLink = document.querySelectorAll(".filter-btn");
//   headCollection = document.getElementById("head-collection"),
//   headTop = document.getElementById("head-top");

// headCollection.onclick = () => filterActive(filterLink[0]);
// headTop.onclick = () => filterActive(filterLink[1]);

// filterLink.forEach((n) => n.addEventListener("click", () => filterActive(n)));

// function filterActive(n) {
//   filterLink.forEach((l) => l.classList.remove("filter-active"));
//   n.classList.add("filter-active");
// }
