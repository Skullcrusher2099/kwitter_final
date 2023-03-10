const firebaseConfig = {
      apiKey: "AIzaSyCkjTxPCGtyXB46QrJyIrKBtFfCJmr4Rgs",
      authDomain: "kwitter-class-9dcdd.firebaseapp.com",
      databaseURL: "https://kwitter-class-9dcdd-default-rtdb.firebaseio.com",
      projectId: "kwitter-class-9dcdd",
      storageBucket: "kwitter-class-9dcdd.appspot.com",
      messagingSenderId: "814265161073",
      appId: "1:814265161073:web:b585fab846fa2b8c1912d0"
    };

firebase.initializeApp(firebaseConfig);

user = localStorage.getItem("User name");
room_name = localStorage.getItem("Room_name");

function send(){
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
          username:user,
          message:message,
          like:0
      });
      document.getElementById("message").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);

      name = message_data['username'];
      message = message_data['message'];
      like = message_data['like'];

      display_name = "<h4>"+name+"<img class = 'user_tick' src='tick.png'></h4>";
      display_message = "<h5>"+message+"</h5>";
      display_likes = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
      display_thumb = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+ like+"</span></button><hr>";

      display_all = display_name+display_message+display_likes+display_thumb;

      document.getElementById("output").innerHTML += display_all;
//End code
      } });  }); }
getData();

function updateLike(msg_id){
      console.log(msg_id);
      buttonId = msg_id;
      likes = document.getElementById(buttonId).value; 
      addlikes = Number(likes) + 1;
      console.log(addlikes)
      firebase.database().ref(room_name).child(msg_id).update({
           like:addlikes
        });
}

function logout(){
      localStorage.removeItem("User name");
      localStorage.removeItem("Room_name");
      window.location.replace("index.html");
}