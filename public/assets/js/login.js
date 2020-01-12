$(() => {
  $('#login-content').submit(() => {
    event.preventDefault();

    let user = {
      userName: $('#headerUsername')
        .val()
        .trim(),
      password: $('#headerPassword')
        .val()
        .trim()
    };
    $.ajax('/login', {
      type: 'POST',
      data: user
    }).then(result => {
      let nextPage = `/home?user_id=${result.id}`;
      location.assign(nextPage);
    });
  });
});
