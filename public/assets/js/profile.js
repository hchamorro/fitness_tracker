$(document).ready(function() {
  const userProfileInfo = $('#userProfileInfo');

  // Adding an event listener for when the form is submitted
  $(userProfileInfo).on('submit', handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a info)
  const url = window.location.search;

  let userId;
  // Sets a flag for whether or not we're updating a post to be false initially
  let updating = false;

  // If we have this section in our url, we pull out the user id from the url  our url
  if (url.indexOf('?user_id=') !== -1) {
    userId = url.split('=')[1];
  }

  const base64EncodeFile = file => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = err => {
        reject(err);
      };
      reader.readAsDataURL(file);
    });
  };
  // A function for handling what happens when the form to create a new post is submitted
  async function handleFormSubmit(event) {
    document.getElementById(
      'userProfileInfo'
    ).hidden = !document.getElementById('userProfileInfo').hidden;

    const url = window.location.search;
    let userId;
    // If we have this section in our url, we pull out the user id from the url  our url
    if (url.indexOf('?user_id=') !== -1) {
      userId = url.split('=')[1];
    }
    event.preventDefault();
    const file = document.getElementById('profileImageUpload').files[0];

    let profilePicture = null;
    if (file) {
      profilePicture = await base64EncodeFile(file);
      const preview = document.querySelector('#profilepix');
      preview.src = profilePicture;
      preview.hidden = false;
    }

    // Constructing a userInfo object to hand to the database
    let userInfo = {
      height: $('#userHeight').val(),
      weight: $('#userWeight').val(),
      DOB: $('#date-age').val(),
      gender: $('#gender option:selected').text(),
      venmo: $('#pay-source')
        .val()
        .trim(),
      userImage: profilePicture,
      userId: userId
    };
    console.log(userInfo);
    updateInfo(userInfo);
  }

  //   // Update a given post, bring user to the blog page when done
  function updateInfo(info) {
    const url = window.location.search;
    let userId;
    // If we have this section in our url, we pull out the user id from the url  our url
    if (url.indexOf('?user_id=') !== -1) {
      userId = url.split('=')[1];
    }
    $.ajax({
      method: 'PUT',
      url: '/api/user_info',
      data: info
    }).then(function() {
      let nextPage = `/home?user_id=${userId}`;
      location.assign(nextPage);
    });
  }

  // GET PROFILE INFO

  const renderProfile = async () => {
    const profileInfo = await getProfile(userId);
    // console.log(profileInfo);

    for (const {
      firstName,
      lastName,
      height,
      weight,
      DOB,
      gender,
      venmo,
      User,
      userImage
    } of profileInfo) {
      $('#profileInfo').html(`
      <div>
      <div class="profile-header">Personal Information</div>
        <label class="pt-15 mt-20 profile-labels">
          Name: ${firstName} ${lastName}
        </label>
        <label class="profile-labels">
          Height: ${height}
        </label>
        <label class="profile-labels">
          Weight: ${weight}
        </label>
        <label class="profile-labels">
          DOB: ${DOB}
        </label>
        <label class="profile-labels">
          Gender: ${gender}
        </label>
        <label class="profile-labels">
          Venmo: ${venmo}
        </label>
    </div>

    <div class= "mt-30">
        <img
        src="${userImage}"
        height="180" width="180" class="profile-pic"></img>
        <label>${User.userName}</label>
        <label><i class="fas fa-envelope">:${User.email}</i></label>
    </div>`);
    }
  };

  function getProfile(user) {
    return new Promise((resolve, reject) => {
      userId = user || '';
      if (userId) {
        userId = `/?user_id=${userId}`;
      }
      $.get('/api/user_info' + userId, function(data) {
        resolve(data);
      });
    });
  }

  renderProfile();

  $('#updateBtn').click(function() {
    document.getElementById(
      'userProfileInfo'
    ).hidden = !document.getElementById('userProfileInfo').hidden;
    $('html,body').animate(
      {
        scrollTop: $('#userProfileInfo').offset().top
      },
      'slow'
    );
  });
});
