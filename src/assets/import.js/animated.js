class EshopAnim {
  constructor({
    position = "top",
    translate = 250,
    delay = 5,
    ease = 0.5,
    loop = true,
  } = {}) {
    this.objects = [];

    this.translate = translate;
    this.transformX = [];
    this.transformY = [];
    this.opacity = [];

    this.position = position;

    this.delay = delay;
    this.ease = ease;

    this.req = window.requestAnimationFrame;
    this.loop = loop;
    this.anim = 0;
  }

  loading({ progress, preloader, title, page, time }) {
    const preload = document.getElementById(`${preloader}`);
    document.querySelector(`.${progress}`).style = `
  animation: progress ${time}s linear;
  `;
    document.querySelectorAll(`#${preloader} div`).forEach((c) => {
      c.style = `animation: opacity ${time}s linear`;
    });
    setTimeout(() => {
      preload.style = `animation: heightAnim ${time / 2}s linear`;

      document.querySelector(`.${title}`).style = `animation: title ${
        time / 3
      }s linear;`;
    }, time * 1000);

    setTimeout(() => {
      preload.style.display = "none";
    }, time * 1000 + 2500);

    setTimeout(() => {
      window.location.href = page;
    }, time * 1000 + 2700);
  }

  currTranfrom(elements) {
    const current = [];
    elements.forEach((obj) => {
      obj.forEach((element) => {
        const style = window.getComputedStyle(element),
          trans = style.getPropertyValue("transform");

        const values =
          trans == "none"
            ? [1, 0, 0, 1, 0, 0]
            : trans.match(/-?\d+\.?\d+|\d+/g);
        current.push([values[4], values[5]]);
      });
    });

    return current;
  }
  currOpacity(elements) {
    const current = [];
    elements.forEach((obj) => {
      obj.forEach((element) => {
        const opa = window
          .getComputedStyle(element)
          .getPropertyValue("opacity");

        const values = opa == "none" ? 1 : opa;
        current.push([values]);
      });
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
    elements.forEach((obj) => {
      obj.forEach((element, i) => {
        if (this.viewport(element)) {
          element.style = `
          opacity: ${this.opacity};
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
    });

    if (this.anim === this.objects.length) return;
    this.req = this.scroll(() => this.animation(elements));
  }

  initialized({ elements }) {
    elements.forEach((el) => {
      this.objects.push(document.querySelectorAll(`.${el}`));
    });

    const transform = this.currTranfrom(this.objects);
    const opa = this.currTranfrom(this.objects);

    transform.forEach((curr) => {
      this.transformX.push(curr[0]);
      this.transformY.push(curr[1]);
    });
    opa.forEach((curr) => {
      this.opacity.push(curr);
    });

    this.animation(this.objects);
  }
}
