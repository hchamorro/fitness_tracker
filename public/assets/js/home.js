$(document).ready(function() {
  console.log('home');
  // Variable to hold our posts
  let posts;

  // The code below handles the case where we want to get blog posts for a specific user
  // Looks for a query param in the url for user_id
  const url = window.location.search;
  let userId;
  if (url.indexOf('?user_id=') !== -1) {
    userId = url.split('=')[1];
  }

  const displayName = async queryId => {
    const personalInfo = await getPersonalInfo(queryId);
    $('#js-name').html(
      `Hi ${personalInfo[0].firstName} ${personalInfo[0].lastName}!`
    );
  };
  //Renders scoreboard
  const renderScoreboard = async () => {
    const allPosts = await getPosts();
    const scoreboard = {};
    //Loops through all the posts and checks to see if they exist.  If they do, then it adds the count by one
    for (let i = 0; i < allPosts.length; i++) {
      let userId = allPosts[i];
      scoreboard[userId.User.userName] = scoreboard[userId.User.userName]
        ? scoreboard[userId.User.userName] + 1
        : 1;
    }
    //Convert object into array of key/value pairs
    const scoreboardArray = Object.entries(scoreboard);
    for (const [username, score] of scoreboardArray) {
      $('#scoreboard').append(`<div> ${username} : ${score} </div>`);
    }
  };

  const renderPosts = async () => {
    const allPosts = await getPosts();

    for (const { comment, image, User } of allPosts) {
      $('#postWall').prepend(`
      <div class="col-md-3-4 col-xs-3-4 mt-30 mb-30">
      <div class="frow column-center" id='postWall'>
        <div class="frow column-center pl-40 pr-40 pb-20 pt-20 user-bc">
          <div class="post-username pl-40 pr-40 pt-10 pb-10 mb-10">${User.username}</div>
          <img
            src="${image}"
            height="350" width="400"></img>
          <div>
            <i class="fas fa-heart mt-10" style="color:slategray;"></i>
            <i class="fas fa-comment ml-5" style="color:slategray;"></i>
          </div>
          <div class= "frow column-start width-100">
            <div class="mt-15 workout-font">Workout: ${comment}</div>
          </div>
        </div>
      </div>
    </div>`);
    }
  };

  //Get all posts (optionally through url Query) and returns as promise
  function getPosts(user) {
    return new Promise((resolve, reject) => {
      userId = user || '';
      if (userId) {
        userId = `/?user_id=${userId}`;
      }
      $.get('/api/post' + userId, function(data) {
        resolve(data);
      });
    });
  }

  function getPersonalInfo(user) {
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

  displayName(userId);
  renderScoreboard();
  renderPosts();
});

$(document).ready(function() {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var modBtn = document.getElementById('popupUser');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks on the button, open the modal
  modBtn.onclick = function() {
    modal.style.display = 'block';
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});

$(document).ready(function() {
  $('#goToProfile').on('click', () => {
    const url = window.location.search;
    let userId;
    if (url.indexOf('?user_id=') !== -1) {
      userId = url.split('=')[1];
      let nextPage = `/profile?user_id=${userId}`;
      location.assign(nextPage);
    }
  });
});

// VIDEO
// Put variables in global scope to make them available to the browser console.
const constraints = (window.constraints = {
  audio: false,
  video: true
});

function handleSuccess(stream) {
  const video = document.querySelector('video');
  const videoTracks = stream.getVideoTracks();
  console.log('Got stream with constraints:', constraints);
  console.log(`Using video device: ${videoTracks[0].label}`);
  window.stream = stream; // make variable available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  if (error.name === 'ConstraintNotSatisfiedError') {
    const v = constraints.video;
    errorMsg(
      `The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`
    );
  } else if (error.name === 'PermissionDeniedError') {
    errorMsg(
      'Permissions have not been granted to use your camera and ' +
        'microphone, you need to allow the page access to your devices in ' +
        'order for the demo to work.'
    );
  }
  errorMsg(`getUserMedia error: ${error.name}`, error);
}

function errorMsg(msg, error) {
  const errorElement = document.querySelector('#errorMsg');
  errorElement.innerHTML += `<p>${msg}</p>`;
  if (typeof error !== 'undefined') {
    console.error(error);
  }
}

async function init(e) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
    e.target.disabled = true;
  } catch (e) {
    handleError(e);
  }
}
