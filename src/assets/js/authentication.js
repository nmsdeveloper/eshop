const signIn = document.getElementById("signin"),
  signUp = document.getElementById("signup"),
  btnSignIn = document.getElementById("go-signup"),
  btnSignUp = document.getElementById("go-signin"),
  btnIn = document.querySelector(".button-in");

btnSignIn.onclick = () => {
  if (signIn) {
    signIn.classList.remove("show-form");
    signUp.classList.remove("hidden-form");

    signIn.classList.add("hidden-form");
    signUp.classList.add("show-form");

    document.title = "EShop - Sign Up";
  }
};

btnSignUp.onclick = () => {
  if (signUp) {
    signIn.classList.remove("hidden-form");
    signUp.classList.remove("show-form");

    signIn.classList.add("show-form");
    signUp.classList.add("hidden-form");

    document.title = "EShop - Sign In";
  }
};

btnIn.onclick = () => {
  window.location.href = "../pages/home.html";
};
