const myFriends = [
  {
    name: "Sally",
    favorites: {
      color: "green",
      number: 7,
      food: "pizza",
    },
  },
  {
    name: "Billy",
    favorites: {
      color: "pink",
      number: 13,
      food: "carrots",
    },
  },
];

let friendIndex = 0;

function showFriend() {
  const currentFriend = myFriends[friendIndex];

  const friendHTML = `
    <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${currentFriend.name}</h5>
          <ul>
            <li>${currentFriend.favorites.color}</li>
            <li>${currentFriend.favorites.number}</li>
            <li>${currentFriend.favorites.food}</li>
            </ul>
          <a href="#" class="btn btn-primary" onclick="nextFriend()">Next</a>
        </div>
      </div>
    `;

  $("#friend-container").html(friendHTML);
}

function nextFriend() {
  friendIndex++;

  if (friendIndex < myFriends.length) {
    showFriend();
  } else {
    $("#friend-container").html(`<h1>no MORE FRIENDS TO SHOW</h1>`);
  }
}
