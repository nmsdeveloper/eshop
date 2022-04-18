// import listMens from "./men.js";
// import listWomans from "./woman.js";
// import listChilds from "./child.js";

const typing = document.getElementById("typing"),
  txt =
    "Etre chic, c'est choisir EShop. N'hesitez plus et faites vos commandes.";

let i = 0;
let speedWrite = 150;
let speedRemove = 50;

function textWrite() {
  if (i < txt.length) {
    typing.textContent += txt.charAt(i);
    i++;
    setTimeout(() => {
      textWrite();
    }, speedWrite);
  } else {
    i = 0;
    textRemove();
  }
}

function textRemove() {
  if (i <= txt.length) {
    typing.textContent = txt.slice(0, -i);
    i++;
    setTimeout(() => {
      textRemove();
    }, speedRemove);
  } else {
    i = 0;
    textWrite();
  }
}
textWrite();
