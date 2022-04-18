export function loadNavBar(active) {
  const headerCont = document.getElementById("header-container"),
    footerCont = document.getElementById("footer-container");

  const navBar = document.createElement("header"),
    footer = document.createElement("footer");

  const templateHead = `
      <nav class="nav-bar">
        <a href="./home.html" class="nav-logo">EShop<span>.</span></a>

        <ul class="nav-list" id="nav-list">
          <li class="nav-item">
            <a href="/src/pages/home.html" class="nav-link">Home</a>
          </li>

          <li class="nav-item">
            <a href="/src/pages/men.html" class="nav-link">Mens</a>
          </li>

          <li class="nav-item">
            <a href="/src/pages/woman.html" class="nav-link">Womans</a>
          </li>

          <li class="nav-item">
            <a href="/src/pages/child.html" class="nav-link">Childs</a>
          </li>

          <li class="nav-item">
            <span id="signout">Sign out</span>
          </li>
        </ul>

        <div class="nav-profile">
          <i class="uil uil-shopping-basket uil-icon"></i>
          <i id="nav-authen" class="uil uil-user uil-icon"></i>
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
              <a href="/src/pages/home.html" class="footer-link">Home</a>
            </li>
            <li class="footer-item">
              <a href="/src/pages/men.html" class="footer-link">Mens</a>
            </li>

            <li class="footer-item">
              <a href="/src/pages/woman.html" class="footer-link">Womans</a>
            </li>

            <li class="footer-item">
              <a href="/src/pages/child.html" class="footer-link">Childs</a>
            </li>
          </ul>
        </div>

        <div class="footer-legacy">
          <span class="footer-title">LEGAL & PRIVACY</span>
          <ul class="footer-menu">
            <li class="footer-item">
              <a href="/src/pages/cookies.html" target="__blank" class="footer-link">
                Cookie Policy
              </a>
            </li>
            <li class="footer-item">
              <a href="/src/pages/privacy.html" target="__blank" class="footer-link">
                Privacy Policies
              </a>
            </li>
            <li class="footer-item">
              <a
              href="/src/pages/website_terms.html"
              target="__blank"
              class="footer-link">
                Website terms of use
              </a>
            </li>
            <li class="footer-item">
              <a href="/src/pages/terms.html" target="__blank" class="footer-link">
                Terms and conditions of sale
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-contact">
          <span class="footer-title">ESHOP CONTACT</span>
          <ul class="footer-menu">
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

  navLink[active].classList.add("is-active");

  window.onscroll = () => {
    if (window.scrollY >= 300) header.classList.add("is-scroll");
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
    window.location.href = "/src/pages/authentication.html";
  };
}
