const hamburgerDisplayLink = () => {
  document.getElementById('logo').hidden = !document.getElementById('logo')
    .hidden;
  document.getElementById('mobile-links').hidden = !document.getElementById(
    'mobile-links'
  ).hidden;
};

const signInIndex = () => {
  document.getElementById('signin-showing').hidden = false;
};

$(document).ready(function() {
  $('#go-home-click').click(function() {
    location.assign(`/`);
  });

  $('#nav-profile').click(function() {
    const url = window.location.search;
    let userId;
    if (url.indexOf('?user_id=') !== -1) {
      userId = url.split('=')[1];
    }
    let nextPage = `/profile?user_id=${userId}`;
    location.assign(nextPage);
  });

  $('#nav-home').click(function() {
    const url = window.location.search;
    let userId;
    if (url.indexOf('?user_id=') !== -1) {
      userId = url.split('=')[1];
    }
    let nextPage = `/home?user_id=${userId}`;
    location.assign(nextPage);
  });
  $('#nav-logout').click(function() {
    location.assign(`/`);
  });
  $('#login-trigger').click(function() {
    $('#login-content').slideToggle();
  });
});
