function addUser()
{
      user_name = document.getElementById("user_name").value;

      localStorage.setItem("user_name",user_name);

      window.location = "kwitter_room.html";
}
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding  room  name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "index.html";
}

function getData()
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML});
      Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name'  id="+Room_names+"onclick='redirectToRoomName(this.id)' >g"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;





      getData();
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}