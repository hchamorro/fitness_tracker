$(function() {
  // Variable to hold our posts
  let posts;

  // The code below handles the case where we want to get blog posts for a specific user
  // Looks for a query param in the url for user_id
  const url = window.location.search;
  let userId;
  if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
    getPosts(userId);
  }
  // If there's no userId we just get all posts as usual
  else {
    getPosts();
  }

  function getPosts(user) {
    userId = user || "";
    if (userId) {
      userId = `/?user_id=${userId}`;
    }
    $.get("/api/posts" + userId, function(data) {
      console.log("Posts", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty(user);
      } else {
        // initializeRows();
      }
    });
  }
});

// Working on a pop up for the post
function popupPost() {
  var popup = document.getElementById("popupUser");
  popup.classList.toggle("show");
};

