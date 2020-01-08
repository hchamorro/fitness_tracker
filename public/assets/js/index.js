$(() => {
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

    let newUser = {
      firstName: $('[name="firstName"]')
        .val()
        .trim(),
      lastName: $('[name="lastName"]')
        .val()
        .trim(),
      userName: $('#userName')
        .val()
        .trim(),
      email: $('[name="email"]')
        .val()
        .trim(),
      password: $('#password')
        .val()
        .trim()
    };
    
    $.ajax('/api/user', {
      type: 'POST',
      data: newUser
    }).then(result => {
      newUser.userId = result.id;
      $.ajax('/api/user_info', {
        type: 'POST',
        data: newUser
      }).then(result => {
        let nextPage = `/home?user_id=${newUser.userId}`;
        location.assign(nextPage);
      });
    });
  });
});
