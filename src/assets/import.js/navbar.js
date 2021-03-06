export function loadNavBar() {
  const headerCont = document.getElementById("header-container"),
    footerCont = document.getElementById("footer-container");

  const navBar = document.createElement("header"),
    footer = document.createElement("footer");

  const templateHead = `
    <!--==================== POPUP ====================-->
      <div id="alert" class="alert">
        <i class="uil uil-exclamation-octagon error-icon"></i>
        <span id="popup-mess" class="popup-mess"></span>
        <span class="popup-close">
          <i class="uil uil-times"></i>
        </span>
      </div>
      <!--==================== POPUP ====================-->
      <nav class="nav-bar">
        <a href="./home.html" class="nav-logo">EShop<span>.</span></a>

        <ul class="nav-list" id="nav-list">
          <li class="nav-item">
            <a href="./home.html" class="nav-link">Home</a>
          </li>

          <li class="nav-item">
            <a href="./men.html" class="nav-link">Mens</a>
          </li>

          <li class="nav-item">
            <a href="./woman.html" class="nav-link">Womans</a>
          </li>

          <li class="nav-item">
            <a href="./child.html" class="nav-link">Childs</a>
          </li>

          <li class="nav-item">
            <span id="signout"><i class="uil uil-download-alt signout"></i></span>
          </li>
        </ul>

        <div class="nav-profile">
          <i class="uil uil-shopping-basket"></i>
          <i id="nav-authen" class="uil uil-user user-cnt"></i>
        </div>

        <div id="nav-close" class="nav-close">
          <i class="uil uil-times"></i>
        </div>

        <div id="nav-toggle" class="nav-toggle">
          <i class="uil uil-bars"></i>
        </div>
      </nav>`,
    templateFoot = `<div class="footer-container">
      <div class="footer-logo">EShop<span>.</span></div>
      <div class="footer-content">
        <div class="footer-menu">
          <span class="footer-title">PAGES</span>

          <ul class="footer-list">
            <li class="footer-item">
              <a href="./home.html" class="footer-link">Home</a>
            </li>
            <li class="footer-item">
              <a href="./men.html" class="footer-link">Mens</a>
            </li>

            <li class="footer-item">
              <a href="./woman.html" class="footer-link">Womans</a>
            </li>

            <li class="footer-item">
              <a href="./child.html" class="footer-link">Childs</a>
            </li>
          </ul>
        </div>

        <div class="footer-legacy">
          <span class="footer-title">LEGAL & PRIVACY</span>
          <ul class="footer-list">
            <li class="footer-item">
              <a href="./cookies.html" target="__blank" class="footer-link">
                Cookie Policy
              </a>
            </li>
            <li class="footer-item">
              <a href="./privacy.html" target="__blank" class="footer-link">
                Privacy Policies
              </a>
            </li>
            <li class="footer-item">
              <a
              href="./website_terms.html"
              target="__blank"
              class="footer-link">
                Website terms of use
              </a>
            </li>
            <li class="footer-item">
              <a href="./terms.html" target="__blank" class="footer-link">
                Terms and conditions of sale
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-contact">
          <span class="footer-title">ESHOP CONTACT</span>
          <ul class="footer-list">
            <li class="footer-item">
              <a href="#" class="footer-link">
                <i class="uil uil-instagram"></i>EShop - IG
              </a>
            </li>
            <li class="footer-item">
              <a href="#" class="footer-link">
                <i class="uil uil-facebook-f"></i>EShop - FBK
              </a>
            </li>
            <li class="footer-item">
              <a href="#" class="footer-link">
                <i class="uil uil-snapchat-ghost"></i>EShop - SNAP
              </a>
            </li>
            <li class="footer-item">
              <a href="#" class="footer-link">
                <i class="uil uil-whatsapp"></i>+221 78 721 34 54
              </a>
            </li>

            <li class="footer-item">
              <a href="#" class="footer-link">
                <i class="uil uil-envelope"></i>eshop@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      &copy; 2022 EShop. All right reserved. By NMS Developer
    </div>
      `;

  navBar.classList = "header";
  footer.classList = "footer";
  navBar.id = "header";
  navBar.innerHTML += templateHead;
  footer.innerHTML += templateFoot;

  headerCont.appendChild(navBar);
  footerCont.appendChild(footer);

  const navLink = document.querySelectorAll(".nav-link"),
    header = document.getElementById("header"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close"),
    navList = document.getElementById("nav-list"),
    navAuthen = document.getElementById("nav-authen");

  if (window.location.href.includes("home")) {
    navLink[0].classList.add("is-active");
  } else if (window.location.href.includes("men")) {
    navLink[1].classList.add("is-active");
  } else if (window.location.href.includes("woman")) {
    navLink[2].classList.add("is-active");
  } else if (window.location.href.includes("child")) {
    navLink[3].classList.add("is-active");
  }

  window.onscroll = () => {
    if (window.scrollY >= 200) header.classList.add("is-scroll");
    else header.classList.remove("is-scroll");
  };

  navToggle.onclick = () => {
    if (navToggle) {
      navToggle.classList = "nav-toggle hidden-toggle";
      navClose.classList = "nav-close show-toggle";

      navList.style.right = "0";
    }
  };
  navClose.onclick = () => {
    if (navClose) {
      navToggle.classList = "nav-toggle show-toggle";
      navClose.classList = "nav-close hidden-toggle";

      navList.style.right = "-100%";
    }
  };

  navAuthen.onclick = () => {
    window.location.href = "./authentication.html";
  };
}
