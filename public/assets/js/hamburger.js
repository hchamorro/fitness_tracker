console.log("landing");

const hamburgerDisplayLink = () => {
  document.getElementById("mobile-hamburger-closed").hidden = true;
  document.getElementById("mobile-hamburger-displayed").hidden = false;
};

const hamburgerHideLink = () => {
  document.getElementById("mobile-hamburger-closed").hidden = false;
  document.getElementById("mobile-hamburger-displayed").hidden = true;
};

const signInIndex = () => {
  document.getElementById("signin-showing").hidden = false;
  console.log("signinindex");
};
