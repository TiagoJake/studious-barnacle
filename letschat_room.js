const firebaseConfig = {
    apiKey: "AIzaSyCJpnGBoK0i7uqKfcCJbtqpfQ-rdvNQHo0",
    authDomain: "letschat-7fbbe.firebaseapp.com",
    databaseURL: "https://letschat-7fbbe-default-rtdb.firebaseio.com",
    projectId: "letschat-7fbbe",
    storageBucket: "letschat-7fbbe.appspot.com",
    messagingSenderId: "1029042232016",
    appId: "1:1029042232016:web:c4623a6e2101a96bf09cd5"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  

username = localStorage.getItem("username");
console.log(username);
//document.getElementById("welcome").innerHTML="welcome " + username + "!"

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

function addRoom(){
   
room_name = document.getElementById("roomName").value

localStorage.setItem("room_name", room_name)

window.location = "room_page.html"

}



function redirectToRoomName(){
    localStorage.setItem("username")
    window.location = "room_page.html"
  }
function logout(){
  window.location = "index.html"
}


