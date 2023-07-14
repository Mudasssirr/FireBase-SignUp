import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfUv2Kdxec479yUnwaV8NRgjmhE5x1QLw",
  authDomain: "login-firebase-f823b.firebaseapp.com",
  projectId: "login-firebase-f823b",
  storageBucket: "login-firebase-f823b.appspot.com",
  messagingSenderId: "769682444373",
  appId: "1:769682444373:web:c33abec722c62dc4da84dc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// For Sign Up //

let signUpBtn = document.getElementById("sign-up-btn");
let useremail = document.getElementById("input-email");
let userpassword = document.getElementById("password");

signUpBtn.addEventListener("click", () => {

  createUserWithEmailAndPassword(auth, useremail.value, userpassword.value)
    .then((res) => {
      const user = res.user;
      console.log("user", user);
      new swal({
        title: "Congrats!",
        text: "You've Signed Up, You can now Login!",
        icon: "success",
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage)
      new swal({
        title: "Error!",
        text: "There was something wrong, either the email is already in use or it's wrong. If this happens multiple times, Report!",
        icon: "error",
      });
    });



})