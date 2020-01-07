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

window.onload = function(){ 
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
    var modBtn = document.getElementById("popupUser");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  modBtn.onclick = function() {
   modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};


