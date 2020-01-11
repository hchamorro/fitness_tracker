console.log("nav");

const hamburgerDisplayLink = () => {
  document.getElementById("logo").hidden = !document.getElementById("logo")
    .hidden;
  document.getElementById("mobile-links").hidden = !document.getElementById(
    "mobile-links"
  ).hidden;
};

const signInIndex = () => {
  document.getElementById("signin-showing").hidden = false;
  console.log("signinindex");
};

$(document).ready(function() {
  $("#login-trigger").click(function() {
    console.log("click");
    $("#login-content").slideToggle();

    // if ($(this).hasClass("active"))
    //   $(this)
    //     .find("span")
    //     .html("&#x25B2;");
    // else
    //   $(this)
    //     .find("span")
    //     .html("&#x25BC;");
  });
});
