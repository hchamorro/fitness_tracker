$(document).ready(function() {
  const userProfileInfo = $("#userProfileInfo");

  // Adding an event listener for when the form is submitted
  $(userProfileInfo).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a info)
  const url = window.location.search;

  let userId;
  // Sets a flag for whether or not we're updating a post to be false initially
  let updating = false;

  // If we have this section in our url, we pull out the user id from the url  our url
  if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
  }

  const base64EncodeFile = file => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = err => {
        reject(err);
      };
      reader.readAsDataURL(file);
    });
  };
  // A function for handling what happens when the form to create a new post is submitted
  async function handleFormSubmit(event) {
    event.preventDefault();
    const file = document.getElementById("profileImageUpload").files[0];

    let profilePicture = null;
    if (file) {
      profilePicture = await base64EncodeFile(file);
      const preview = document.querySelector("#profilepix");
      preview.src = profilePicture;
      preview.hidden = false;
    }

    console.log("profilepix", profilePicture);

    // Constructing a userInfo object to hand to the database
    let userInfo = {
      height: $("#userHeight").val(),
      height: $("#userWeight").val(),
      DOB: $("#date-age").val(),
      gender: $("#gender option:selected").text(),
      venmo: $("#pay-source")
        .val()
        .trim(),
      profpix: profilePicture,
      userId: userId
    };
    console.log("***********", userInfo);
    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      userInfo.userId = userId;
      updateInfo(userInfo);
    } else {
      submitInfo(userInfo);
    }
    updateInfo(userInfo);
  }

  //   // Submits a new post and brings user to blog page upon completion
  function submitInfo(info) {
    $.post("/api/user_info", info, function() {
      window.location.href = "/";
    });
  }

  //   // Update a given post, bring user to the blog page when done
  function updateInfo(info) {
    $.ajax({
      method: "PUT",
      url: "/api/user_info",
      data: info
    }).then(function() {
      //   window.location.href = '/';
      console.log("user updated succesfully");
    });
  }
});