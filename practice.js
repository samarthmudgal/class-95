
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDdM1fJSPx0mHdQN-yWnvzngXRsyDo2ckk",
    authDomain: "classtest-81e1c.firebaseapp.com",
    databaseURL: "https://classtest-81e1c-default-rtdb.firebaseio.com",
    projectId: "classtest-81e1c",
    storageBucket: "classtest-81e1c.appspot.com",
    messagingSenderId: "128197218352",
    appId: "1:128197218352:web:41e766b81ced5aa73d1df5"};

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}