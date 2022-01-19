const facebookProfile = {
  name: "Ryan",
  friends: 100,
  messages: ["I am bored AF.", "Throwback Thursday!", "R.I.P. Quade's bungus..."],
  postMessage: function(message) {
    return facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
    return facebookProfile.messages.splice(index, 1);
  },
  addFriend: function() {
    return facebookProfile.friends += 1;
  },
  removeFriend: function() {
    return facebookProfile.friends -= 1;
  }
}

/* testing .postMessage method:
facebookProfile.postMessage("Out for dinner with bae!");
console.log(facebookProfile.messages);
*/

/* testing .deleteMessage method:
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);
*/

/* testing .addFriend method:
facebookProfile.addFriend();
console.log(facebookProfile.friends);
*/

/* testing .removeFriend method:
facebookProfile.removeFriend();
console.log(facebookProfile.friends);
*/