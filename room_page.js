const firebaseConfig = {
    apiKey: "AIzaSyCJpnGBoK0i7uqKfcCJbtqpfQ-rdvNQHo0",
    authDomain: "letschat-7fbbe.firebaseapp.com",
    databaseURL: "https://letschat-7fbbe-default-rtdb.firebaseio.com",
    projectId: "letschat-7fbbe",
    storageBucket: "letschat-7fbbe.appspot.com",
    messagingSenderId: "1029042232016",
    appId: "1:1029042232016:web:c4623a6e2101a96bf09cd5"
  };
  firebase.initializeApp(firebaseConfig);


  username = localStorage.getItem("username")
  roomname = localStorage.getItem("room_name")

  function send(){
    msg = document.getElementById("sendMessage").value
    firebase.database().ref(roomname).push({
      name:username,
      message:msg,
      like:0
    });
    document.getElementById("sendMessage").value = ""
  }

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
   
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";



   row = name_with_tag + message_with_tag       
   document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();


function logout(){
    window.location = "index.html"
  }
  