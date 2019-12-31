console.log("landing");

const hamburgerDisplyLink = () => {
  document.getElementById("mobile-hamburger-closed").hidden = true;
  document.getElementById("mobile-hamburger-displayed").hidden = false;
};

const hamburgerHideLink = () => {
  document.getElementById("mobile-hamburger-closed").hidden = false;
  document.getElementById("mobile-hamburger-displayed").hidden = true;
};
