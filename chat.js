ifUserIsLoggedIn(function(){
// update the user databaseURL
updateUserData();

loadUsers(function(users){
  var usersList = "";
  for (var uid in users){
    var user = users[uid];
//alert(uid+" "+window.currentUser.id);
// if the user is not the current user
    if(window.currentUser.id != uid){
    usersList += renderUser(user);
  }
}
  getElement("members").innerHTML = usersList;
});
 onClickMultiple("member", function(element){
   var chat_id = element.id;
   loadMessages(chat_id,function(messages){
     var messagesList = "";
     for (var uid in messages){
       var message =messages[uid];
  // alert(uid+" "+window.currentUser.id);
   // if the user is not the current user

       messagesList += renderMessage(message);

   }
     getElement("messages").innerHTML = messagesList;

   });

getElement("chat_id").value = chat_id;

   });

click("send-button",function(){
  var text = getElement("message-text").value;

var chat_id = getElement("chat_id").value;
sendMessage(chat_id,text);
});
});
