$(function() {
  console.log("signup");
  $("#userForm").submit(() => {
    event.preventDefault();
    let submit = true;
    if ($('[name="userName"]').val() === "") {
      console.log("error");
    }

    //Add username to database
    let newUserName = {
      userName: $('[name="userName"]')
        .val()
        .trim()
    };

    let newUser = {
      userName: $('[name="userName"]')
        .val()
        .trim(),
      email: $('[name="email"]')
        .val()
        .trim(),
      password: $('[name="password"]')
        .val()
        .trim()
    };

    $.ajax("/api/user", {
      type: "POST",
      data: newUser
    }).then(() => {
      console.log(`added ${JSON.stringify(newUser)} to the User table`);
    });
  });
});
