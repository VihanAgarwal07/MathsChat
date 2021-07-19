//YOUR FIREBASE LINKS
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
roomname=localStorage.getItem("roomname");
function getData() 
{
       firebase.database().ref("/"+roomname).on('value', function(snapshot) 
{
       document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) {
        childKey  = childSnapshot.key;
       childData = childSnapshot.val();
       if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
user_name=message_data["username"];
message=message_data["message"];
like=message_data["like"];

html1="<h4>"+user_name+"</h4>"
html2="<h4 class='message_h4'>"+message+"</h4>";
html3="<button type='button' class='btn btn-warning' value='"+like+"' id='"+firebase_message_id+"' onclick='updateLike(this.id)'>"
html4="<span class='glyphicon glyphicon-thumbs-up'> Like : "+like+"</span></button><hr>"
row=html1+html2+html3+html4;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      button_id=message_id;
      console.log(button_id);

      like=document.getElementById(button_id).value;
      console.log(like)

      like=Number(like)+1;
      console.log(like)

firebase.database().ref(roomname).child(button_id).update({
like:like
});
}

function sendmsg(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
          message:msg,
          like:0,
          username:username      
      })

}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname")
    window.location="index.html"
    }