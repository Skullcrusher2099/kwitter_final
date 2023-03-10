function add_name(){
    user = document.getElementById("name").value;
    localStorage.setItem("User name",user);
    window.location = "kwitter_room.html";
}