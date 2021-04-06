  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDGk7BqMMkLSImV9UH8TsifnB3REjrzJIQ",
      authDomain: "kwitter-d057e.firebaseapp.com",
      databaseURL: "https://kwitter-d057e-default-rtdb.firebaseio.com",
      projectId: "kwitter-d057e",
      storageBucket: "kwitter-d057e.appspot.com",
      messagingSenderId: "873922355981",
      appId: "1:873922355981:web:a027349378537aec60c644"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("Room-Name - "+ room_names);
      row = "<div class='room_name' id="+room_names+" onclick='redirctToRoomName(this.id)'>#"+room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logOut(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}