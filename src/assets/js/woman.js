import { listProducts, addCart } from "../import.js/product.js";

const productsContent = document.getElementById("products-content"),
  lists = [
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (6).png",
      name: "Robe 6",
      price: 8500,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (6).png",
      name: "Jupe 6",
      price: 8000,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (2).png",
      name: "Jupe 2",
      price: 14000,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (7).png",
      name: "Robe 7",
      price: 8000,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (8).png",
      name: "Jupe 8",
      price: 13500,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (8).png",
      name: "Robe 8",
      price: 11000,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (2).png",
      name: "Robe 2",
      price: 10000,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (5).png",
      name: "Robe 5",
      price: 10500,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (9).png",
      name: "Jupe 9",
      price: 3500,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (4).png",
      name: "Robe 4",
      price: 14500,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (13).png",
      name: "Jupe 13",
      price: 10000,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (11).png",
      name: "Jupe 11",
      price: 3500,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (10).png",
      name: "Robe 10",
      price: 14000,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (1).png",
      name: "Robe 1",
      price: 14000,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (5).png",
      name: "Jupe 5",
      price: 8500,
    },

    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (1).png",
      name: "Jupe 1",
      price: 12000,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (10).png",
      name: "Jupe 10",
      price: 14000,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (3).png",
      name: "Robe 3",
      price: 7500,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (12).png",
      name: "Robe 12",
      price: 4500,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (12).png",
      name: "Jupe 12",
      price: 24000,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (14).png",
      name: "Robe 14",
      price: 11000,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (9).png",
      name: "Robe 9",
      price: 12000,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (3).png",
      name: "Jupe 3",
      price: 4000,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (15).png",
      name: "Robe 15",
      price: 6000,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (13).png",
      name: "Robe 13",
      price: 3000,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (16).png",
      name: "Robe 16",
      price: 4500,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (4).png",
      name: "Jupe 4",
      price: 9000,
    },
    {
      type: "dress",
      image: "./src/assets/images/femmes/robes/robe (11).png",
      name: "Robe 11",
      price: 2500,
    },
    {
      type: "skirt",
      image: "./src/assets/images/femmes/jupes/jupe (7).png",
      name: "Jupe 7",
      price: 2500,
    },
  ];

productsContent.innerHTML = listProducts(lists);

const filterSearch = document.getElementById("filter-search"),
  filterBtns = document.querySelectorAll(".filter-btn"),
  productsCard = document.querySelectorAll(".products-cards");

filterSearch.onkeyup = (e) => {
  e.preventDefault();
  const searchValue = filterSearch.value.toLowerCase().trim();
  productsCard.forEach((pc) => {
    if (
      pc.classList.contains(searchValue) ||
      pc.classList.value.includes(searchValue)
    ) {
      pc.style.display = "flex";
    } else if (searchValue == "") {
      pc.style.display = "flex";
    } else {
      pc.style.display = "none";
    }
  });
};
filterBtns.forEach(
  (n) =>
    (n.onclick = (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      productsCard.forEach((pc) => {
        if (filter == "all") {
          pc.style.display = "flex";
        } else {
          if (pc.classList.contains(filter)) {
            pc.style.display = "flex";
          } else {
            pc.style.display = "none";
          }
        }
        filterBtns.forEach((c) => c.classList.remove("active"));
        n.classList.add("active");
      });
    })
);

addCart();
