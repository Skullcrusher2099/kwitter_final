
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("welcome_name").innerHTML = "Welcome " + user;

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"Adding Room Name"
    });
      localStorage.setItem("Room_name",room_name);
      window.location = "chating.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("display_rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      display = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'> #"+Room_names+"</div> <hr>";
      document.getElementById("display_rooms").innerHTML += display;
      //End code
      });});}
getData();

function redirect(name){
      console.log(name);
      localStorage.setItem("Room_name",name);
      window.location = "chating.html";
}
function logout(){
      localStorage.removeItem("User name");
      localStorage.removeItem("Room_name");
      window.location.replace("index.html");
}