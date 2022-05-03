const slogansImg = document.querySelectorAll(".slogans-img");
const headImg = document.querySelectorAll(".goshop-card");

// if (window.getComputedStyle(headImg[2]).getPropertyValue("transform") == 'none')

class EshopAnim {
  constructor({
    position = "top",
    translate = 250,
    delay = 5,
    ease = 0.5,
  } = {}) {
    this.objects;

    this.translate = translate;
    this.transformX = 0;
    this.transformY = 0;

    this.position = position;

    this.delay = delay;
    this.ease = ease;
  }

  currTranfrom(elements) {
    const style = window.getComputedStyle(elements),
      trans = style.getPropertyValue("transform");

    const values =
        trans == "none" ? [1, 0, 0, 1, 0, 0] : trans.match(/-?\d+\.?\d+|\d+/g),
      computedTranslateX = values[4],
      computedTranslateY = values[5];
    return [computedTranslateX, computedTranslateY];
  }

  scroll(callback) {
    window.requestAnimationFrame(callback) || window.setTimeout(callback);
    // this.resizeEl();
  }

  viewport(el) {
    if (typeof elements === "object" && elements instanceof NodeList)
      if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
    var rect = el.getBoundingClientRect();

    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  animation(elements) {
    elements.forEach((element) => {
      if (this.viewport(element)) {
        element.style = `
            opacity: 1;
            transform: matrix(1, 0, 0, 1, ${this.transformX}, ${this.transformY});
            transition: transform ${this.delay}s ${this.ease}s cubic-bezier(0, 1, 0.3, 1),
              opacity 0.${this.delay}s ${this.ease}s ease-out;
            will-change: transform, opacity;
          `;
      } else {
        element.style = `
              opacity: 0;
              transform: matrix(1, 0, 0, 1, ${
                this.position === "left"
                  ? -this.translate
                  : this.position === "right"
                  ? this.translate
                  : this.transformX
              }, ${
          this.position === "top"
            ? -this.translate
            : this.position === "bottom"
            ? this.translate
            : this.transformY
        });
          `;
      }
    });

    this.scroll(() => this.animation(elements));
  }

  pair({ elements, translate, rotate, delay = 5, ease = 0.5 }) {
    for (let i = 0; i < elements.length; i++) {
      if (i % 2 == 0) {
        if (this.viewport(elements[i]))
          elements[i].style = `
      opacity: 1;
      transform: translateX(${translate}rem) rotateZ(${rotate}deg);
          transition: transform ${delay}s ${ease}s cubic-bezier(0, 1, 0.3, 1),
            opacity 0.${delay}s ${ease}s ease-out;
          will-change: transform, opacity;
        `;
        else {
          elements[i].style = `
            opacity: 0;
            transform: translateX(-5rem) rotateZ(-10deg);
            `;
        }
      }
    }

    window.setTimeout(() => {
      if (translate <= 0) {
        translate++;
      }
      if (rotate <= 0) {
        rotate++;
      }
      this.pair({
        elements,
        translate,
        rotate,
        delay,
        ease,
      });
    });
  }
  odd({ elements, translate, rotate, delay = 5, ease = 0.5 }) {
    for (let i = 0; i < elements.length; i++) {
      if (i % 2 != 0) {
        if (this.viewport(elements[i]))
          elements[i].style = `
      opacity: 1;
      transform: translateX(${translate}rem) rotateZ(${rotate}deg);
          transition: transform ${delay}s ${ease}s cubic-bezier(0, 1, 0.3, 1),
            opacity 0.${delay}s ${ease}s ease-out;
          will-change: transform, opacity;
        `;
        else {
          elements[i].style = `
            opacity: 0;
            transform: translateX(5rem) rotateZ(10deg);
            `;
        }
      }
    }

    window.setTimeout(() => {
      if (translate >= 0) {
        translate--;
      }
      if (rotate >= 0) {
        rotate--;
      }

      this.odd({
        elements,
        translate,
        rotate,
        delay,
        ease,
      });
    });
  }

  resizeEl() {
    window.onresize = () => {
      window.location.reload();
    };
  }

  initialized({ elements }) {
    this.objects = document.querySelectorAll(`.${elements}`);
    const transform = this.currTranfrom(this.objects[0]);
    this.transformX = transform[0];
    this.transformY = transform[1];
    this.animation(this.objects);
  }
}

const eshopAnim = new EshopAnim({
  position: "top",
  translate: 200,
  delay: 5,
  ease: 0.5,
});

eshopAnim.initialized({ elements: "head-img" });

const slogansAnim = new EshopAnim();
slogansAnim.pair({
  elements: slogansImg,
  translate: -5,
  rotate: -10,
  delay: 5,
  ease: 0.5,
});
slogansAnim.odd({
  elements: slogansImg,
  translate: 5,
  rotate: 10,
  delay: 5,
  ease: 0.5,
});
