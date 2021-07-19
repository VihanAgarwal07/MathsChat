//ADD YOUR FIREBASE LINKS HERE

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAUOfgQuB8in4nFsNU6nD_Qn--2deMoD-c",
    authDomain: "mathchat-fbf2a.firebaseapp.com",
    databaseURL: "https://mathchat-fbf2a-default-rtdb.firebaseio.com",
    projectId: "mathchat-fbf2a",
    storageBucket: "mathchat-fbf2a.appspot.com",
    messagingSenderId: "827808054579",
    appId: "1:827808054579:web:11a4c1423127cb812cd246"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("username");
  document.getElementById("user_name").innerHTML="Welcome " + username;

  function Add_room(){
    roomname=document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update({
  purpose:"add room name"
});
window.location="kwitter_page.html"
  }
  
//

function getData() {
  row=""
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{
  
  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row1="<div class='room_name' id='"+Room_names+"' onclick='redirect_room(this.id)'>"+Room_names+"</div>" +"<hr>";
row=row+row1;
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function redirect_room(roomname){
  localStorage.setItem("roomname" , roomname);
  window.location="kwitter_page.html"
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname")
window.location="index.html"
}