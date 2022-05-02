const slogansImg = document.querySelectorAll(".slogans-img");

class Effect {
  scroll(callback) {
    window.requestAnimationFrame(callback) ||
      function () {
        window.setTimeout(callback, 1000 / 60);
      };
  }

  isElementInViewport(el) {
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

  loop({ elements }) {
    elements.forEach((element) => {
      if (this.isElementInViewport(element))
        element.style = `
        opacity: 1;
        transform: none;
      `;
      else {
        element.style = `
            opacity: 0;
            transform: translateX(-5rem) rotateZ(-10deg);
            transition: transform 5s 0.5s cubic-bezier(0, 1, 0.5, 1),
                opacity 0.5s 0.5s ease-out;
            will-change: transform, opacity;
        `;
      }
    });

    this.scroll(() => this.loop({ elements: elements }));
  }

  initialized({ elements }) {
    // slogansImg.forEach((element) => {
    //   element.style = `
    //         opacity: 0;
    //         transform: translateX(-5rem) rotateZ(-10deg);
    //         transition: transform 4.2s 0.45s cubic-bezier(0, 1, 0.3, 1),
    //             opacity 0.5s 0.45s ease-out;
    //         will-change: transform, opacity;
    //     `;
    // });

    this.loop({ elements: elements });
  }
}

const effect = new Effect();
effect.initialized({ elements: slogansImg });
