// $(() => {
//   $("#submit-form").on("click", event => {
//     event.preventDefault();

//     let myDate = $("#date-age").val();
//     console.log(myDate);

//     let newUser = {
//       firstName: $("#first-name")
//         .val()
//         .trim(),
//       lastName: $("#last-name")
//         .val()
//         .trim(),
//       DOB: $("date-age").val(),
//       gender: $("#gender option:selected").text(),
//       payment: $("#pay-source")
//         .val()
//         .trim()
//     };
//     console.log("button click", newUser);
//   });
// });

$(function() {
  console.log('signup');
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      const value = input.value.trim();
      if (!value) {
        input.classList.add('dirty');
      } else {
        input.classList.remove('dirty');
      }
    });
  });

  $('#userForm').submit(() => {
    event.preventDefault();
    let submit = true;
    if ($('[name="userName"]').val() === '') {
      console.log('error');
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

    $.ajax('/api/user', {
      type: 'POST',
      data: newUser
    }).then(result => {
      console.log(`added ${JSON.stringify(newUser)} to the User table`);
      let nextPage = `/home?user_id=${result.id}`;
      location.assign(nextPage);
    });
  });
});
