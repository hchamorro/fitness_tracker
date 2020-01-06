$(document).ready(function() {
  const cmsForm = $("#cms");
  const firstName = $("#first-name");
  const lastName = $("#last-name");

  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a info)
  const url = window.location.search;

  let userId;
  // Sets a flag for whether or not we're updating a post to be false initially
  let updating = false;

  // If we have this section in our url, we pull out the user id from the url  our url
  if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
  }

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (!firstName.val().trim() || !lastName.val().trim()) {
      return;
    }
    // Constructing a userInfo object to hand to the database
    let userInfo = {
      firstName: firstName.val().trim(),
      lastName: lastName.val().trim(),
      DOB: $("date-age").val(),
      gender: $("#gender option:selected").text(),
      payment: $("#pay-source")
        .val()
        .trim(),
      userId: userId
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      userInfo.userId = userId;
      updateInfo(userInfo);
    } else {
      submitInfo(userInfo);
    }
  }

  // Submits a new post and brings user to blog page upon completion
  function submitInfo(info) {
    $.post("/api/user_info", info, function() {
      window.location.href = "/";
    });
  }

  // Update a given post, bring user to the blog page when done
  function updateInfo(info) {
    $.ajax({
      method: "PUT",
      url: "/api/user_info",
      data: info
    }).then(function() {
      window.location.href = "/";
    });
  }
});
