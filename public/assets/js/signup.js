$(function() {
  console.log("signup");
  $("#userForm").submit(() => {
    event.preventDefault();
    let submit = true;
    if ($('[name="firstName"]').value === "") {
      console.log("error");
    }
  });
});
