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

const leftAnim = new EshopAnim({
  position: "left",
  translate: 200,
});
const rightAnim = new EshopAnim({
  position: "right",
  translate: 200,
  loop: false,
});
const topAnim = new EshopAnim({
  translate: 200,
});

const bottomAnim = new EshopAnim({
  position: "bottom",
  translate: 200,
});

leftAnim.initialized({
  elements: ["goshop-card", "bottom-mess", "head-subtitle", "footer-logo"],
});
rightAnim.initialized({
  elements: [
    "goshop-container img",
    "head-title",
    "footer-copyright",
    "footer-menu",
    "footer-legacy",
    "footer-contact",
  ],
});
topAnim.initialized({ elements: ["head-img"] });
bottomAnim.initialized({ elements: ["section-subtitle", "section-title"] });

const slogansAnim = new EshopAnim();
slogansAnim.pair({
  elements: "slogans-img",
  translate: -5,
  rotate: -10,
});
slogansAnim.odd({
  elements: "slogans-img",
  translate: 5,
  rotate: 10,
});
