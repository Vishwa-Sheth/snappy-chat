function click(elementId, fn){
    var element = document.getElementById(elementId);
    if(element){
      element.addEventListener("click",fn);
    }
}

function redirect(path){
  window.location = path;
  return false;
}
function logInUser(){
  // Log in with Google
  // using Firebase


  redirect("chat.html");
}
