$(function() {
  console.log('signup');
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

    $.ajax('/api/user', {
      type: 'POST',
      data: newUserName
    }).then(() => {
      console.log(`added ${JSON.stringify(newUserName)} to the User table`);
    });
  });
});
