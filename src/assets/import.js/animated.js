const slogansImg = document.querySelectorAll(".slogans-img");
const headImg = document.querySelectorAll(".goshop-card");

// if (window.getComputedStyle(headImg[2]).getPropertyValue("transform") == 'none')

class EshopAnim {
  constructor({
    position = "top",
    translate = 250,
    delay = 5,
    ease = 0.5,
    loop = true,
  } = {}) {
    this.objects;

    this.translate = translate;
    this.transformX = [];
    this.transformY = [];

    this.position = position;

    this.delay = delay;
    this.ease = ease;

    this.req = window.requestAnimationFrame;
    this.loop = loop;
    this.anim = 0;

    this.reqPair = window.requestAnimationFrame;
    this.reqOdd = window.requestAnimationFrame;
    this.animPair = 0;
  }

  currTranfrom(elements) {
    const current = [];
    elements.forEach((element) => {
      const style = window.getComputedStyle(element),
        trans = style.getPropertyValue("transform");

      const values =
        trans == "none" ? [1, 0, 0, 1, 0, 0] : trans.match(/-?\d+\.?\d+|\d+/g);
      current.push([values[4], values[5]]);
    });

    return current;
  }

  scroll(callback) {
    window.requestAnimationFrame(callback) || window.setTimeout(callback);
  }

  viewport(el) {
    if (typeof el === "object" && el instanceof NodeList)
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
    elements.forEach((element, i) => {
      if (this.viewport(element)) {
        element.style = `
          opacity: 1;
          transform: matrix(1, 0, 0, 1, ${this.transformX[i]}, ${this.transformY[i]});
          transition: transform ${this.delay}s ${this.ease}s cubic-bezier(0, 1, 0.3, 1),
            opacity 0.${this.delay}s ${this.ease}s ease-out;
          will-change: transform, opacity;
        `;
        if (!this.loop) {
          this.anim++;
          window.cancelAnimationFrame(this.req);
        }
      } else {
        element.style = `
          opacity: 0;
          transform: matrix(1, 0, 0, 1, ${
            this.position === "left"
              ? -this.translate
              : this.position === "right"
              ? this.translate
              : this.transformX[i]
          },
          ${
            this.position === "top"
              ? -this.translate
              : this.position === "bottom"
              ? this.translate
              : this.transformY[i]
          });
        `;
        this.anim = 0;
      }
    });

    if (this.anim === this.objects.length) return;
    this.req = this.scroll(() => this.animation(elements));
  }

  pair({ elements, translate, rotate, delay = 5, ease = 0.5, loop = false }) {
    elements.forEach((element, i) => {
      if (i % 2 == 0) {
        if (this.viewport(element)) {
          element.style = `
      opacity: 1;
      transform: translateX(${translate}rem) rotateZ(${rotate}deg);
          transition: transform ${delay}s ${ease}s cubic-bezier(0, 1, 0.3, 1),
            opacity 0.${delay}s ${ease}s ease-out;
          will-change: transform, opacity;
        `;
          if (!loop) {
            this.animPair++;
            window.cancelAnimationFrame(this.reqPair);
          }
        } else {
          element.style = `
            opacity: 0;
            transform: translateX(-5rem) rotateZ(-10deg);
            `;
          this.animPair = 0;
        }
      }
    });

    if (this.animPair === elements.length) return;

    window.setTimeout(() => {
      if (translate <= 0) {
        translate++;
      }
      if (rotate <= 0) {
        rotate++;
      }

      this.reqPair = this.scroll(() =>
        this.pair({
          elements,
          translate,
          rotate,
          delay,
          ease,
          loop,
        })
      );
    });
  }
  odd({ translate, rotate }) {
    let anim = 1;
    elements.forEach((element, i) => {
      if (i % 2 != 0) {
        if (this.viewport(element)) {
          element.style = `
      opacity: 1;
      transform: translateX(${translate}rem) rotateZ(${rotate}deg);
          transition: transform ${delay}s ${ease}s cubic-bezier(0, 1, 0.3, 1),
            opacity 0.${delay}s ${ease}s ease-out;
          will-change: transform, opacity;
        `;
          if (!loop) {
            anim--;
            window.cancelAnimationFrame(this.reqOdd);
          }
        } else {
          element.style = `
            opacity: 0;
            transform: translateX(5rem) rotateZ(10deg);
            `;
        }
      }
    });

    if (anim === 0) return;

    window.setTimeout(() => {
      if (translate >= 0) {
        translate--;
      }
      if (rotate >= 0) {
        rotate--;
      }

      this.reqOdd = this.scroll(() =>
        this.odd({
          elements,
          translate,
          rotate,
          delay,
          ease,
          loop,
        })
      );
    });
  }

  initialized({ elements }) {
    this.objects = document.querySelectorAll(`.${elements}`);

    const transform = this.currTranfrom(this.objects);
    transform.forEach((curr) => {
      this.transformX.push(curr[0]);
      this.transformY.push(curr[1]);
    });

    this.animation(this.objects);
  }

  initializedPairOdd({ elements }) {
    const objects = document.querySelectorAll(`.${elements}`);

    this.pair({ elements: objects, translate: -5, rotate: -10 });
  }
}

const eshopAnim = new EshopAnim({
  position: "left",
  translate: 200,
  delay: 5,
  ease: 0.5,
  loop: false,
});

eshopAnim.initialized({ elements: "goshop-card" });

const slogansAnim = new EshopAnim();
slogansAnim.initializedPairOdd({
  elements: "slogans-img",
});
// slogansAnim.odd({
//   translate: 5,
//   rotate: 10,
// });
