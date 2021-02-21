// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_qImKqnZATKKIP04c_8F4z5H97dqVIWk",
    authDomain: "message-29933.firebaseapp.com",
    databaseURL: "https://message-29933-default-rtdb.firebaseio.com",
    projectId: "message-29933",
    storageBucket: "message-29933.appspot.com",
    messagingSenderId: "258994985695",
    appId: "1:258994985695:web:a67b0d2d7158f89dc4e76a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//firebase url//

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "social.html";
}