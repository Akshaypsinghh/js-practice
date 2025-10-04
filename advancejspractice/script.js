const addfriend = document.querySelector("#addFriend");
const removefriend = document.querySelector("#removeFriend");
const input = document.querySelector("#friendName");

let friends = [];

addfriend.addEventListener("click", addfriends);
removefriend.addEventListener("click", removefriends);

function addfriends() {
  const name = input.value.trim();
  if (name == "") {
    console.log("enter the fucking name bastard!");
    return;
  }
  if (friends.includes(name)) {
    console.log("friend already exists");
  } else {
    friends.push(name);
    updatelist();
  }
  input.value = "";
}

function removefriends() {
  const name = input.value.trim();
  const idx = friends.indexOf(name);
  if (idx == -1) {
    log("friend not found");
  } else {
    friends.splice(idx, 1);
    updatelist();
  }
  input.value = "";
}

function updatelist() {
  const list = document.getElementById("friendList");
  list.innerHTML = "";
  friends.forEach((friend) => {
    const li = document.createElement("li");
    li.textContent = friend;
    list.appendChild(li);
  });
}
