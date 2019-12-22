$(() => {
  console.log("helloworlld");
  $("#submit-form").on("click", event => {
    event.preventDefault();

    let myDate = new Date($("#date-age").val());
    console.log(myDate);

    let newUser = {
      firstName: $("#first-name")
        .val()
        .trim(),
      lastName: $("#last-name")
        .val()
        .trim(),
      DOB: $("date-age").val(),
      gender: $("#gender option:selected").text(),
      payment: $("#pay-source")
        .val()
        .trim()
    };
    console.log("button click", newUser);
  });
});
