import { listProducts, addCart } from "../import.js/product.js";

const productsContent = document.getElementById("products-content"),
  lists = [
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (6).png",
      name: "Garcon 6",
      price: 8500,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (8).png",
      name: "Garcon 8",
      price: 11000,
    },
    {
      type: "girl",
      image: "./src/assets/images/enfants/girls/girl (6).png",
      name: "Fille 6",
      price: 8000,
    },
    {
      type: "girl",
      image: "./src/assets/images/enfants/girls/girl (2).png",
      name: "Fille 2",
      price: 14000,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (7).png",
      name: "Garcon 7",
      price: 8000,
    },
    {
      type: "girl",
      image: "./src/assets/images/enfants/girls/girl (8).png",
      name: "Fille 8",
      price: 13500,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (2).png",
      name: "Garcon 2",
      price: 10000,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (5).png",
      name: "Garcon 5",
      price: 10500,
    },
    {
      type: "girl",
      image: "./src/assets/images/enfants/girls/girl (9).png",
      name: "Fille 9",
      price: 3500,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (4).png",
      name: "Garcon 4",
      price: 14500,
    },

    {
      type: "girl",
      image: "./src/assets/images/enfants/girls/girl (11).png",
      name: "Fille 11",
      price: 3500,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (10).png",
      name: "Garcon 10",
      price: 14000,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (1).png",
      name: "Garcon 1",
      price: 14000,
    },
    {
      type: "girl",
      image: "./src/assets/images/enfants/girls/girl (5).png",
      name: "Fille 5",
      price: 8500,
    },
    {
      type: "girl",
      image: "./src/assets/images/enfants/girls/girl (1).png",
      name: "Fille 1",
      price: 12000,
    },
    {
      type: "girl",
      image: "./src/assets/images/enfants/girls/girl (10).png",
      name: "Fille 10",
      price: 14000,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (3).png",
      name: "Garcon 3",
      price: 7500,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (12).png",
      name: "Garcon 12",
      price: 4500,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (14).png",
      name: "Garcon 14",
      price: 11000,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (9).png",
      name: "Garcon 9",
      price: 12000,
    },
    {
      type: "girl",
      image: "./src/assets/images/enfants/girls/girl (3).png",
      name: "Fille 3",
      price: 4000,
    },

    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (13).png",
      name: "Garcon 13",
      price: 3000,
    },

    {
      type: "girl",
      image: "./src/assets/images/enfants/girls/girl (4).png",
      name: "Fille 4",
      price: 9000,
    },
    {
      type: "boy",
      image: "./src/assets/images/enfants/boys/boy (11).png",
      name: "Garcon 11",
      price: 2500,
    },
    {
      type: "girl",
      image: "./src/assets/images/enfants/girls/girl (7).png",
      name: "Fille 7",
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
