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
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "Adding User"
    });
}