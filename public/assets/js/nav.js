console.log("nav");
$(document).ready(function() {
  const hamburgerDisplayLink = () => {
    document.getElementById("logo").hidden = !document.getElementById("logo")
      .hidden;
    document.getElementById("mobile-links").hidden = !document.getElementById(
      "mobile-links"
    ).hidden;
  };

  const signInIndex = () => {
    document.getElementById("signin-showing").hidden = false;
  };

  $("#go-home-click").click(function() {
    location.assign(`/`);
  });


  $("#nav-profile").click(function() {
    location.assign(`/profile`);
  });

  $("#login-trigger").click(function() {
    $("#login-content").slideToggle();
  });
});
