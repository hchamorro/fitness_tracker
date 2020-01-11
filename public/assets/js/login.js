$(() => {
  console.log("login");
  const inputs = document.querySelectorAll("input");
  const url = window.location.search;
  let userId;
  if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
  }


    //Add username to database

    let user = {
      userName: $("#userName")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim()
    };

    $.ajax("/login", {
      type: "POST",
      data: user
    }).then(result => {
      let nextPage = `/home?user_id=${newUser.userId}`;
      location.assign(nextPage);
    });
  });

  $("#goToProfile").on("click", () => {
    let nextPage = `/profile?user_id=${userId}`;
    location.assign(nextPage);
  });
});
