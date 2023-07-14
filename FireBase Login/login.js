import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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



// For Log In //

let userEmailLogin = document.getElementById("input-email-login");
let userPasswordLogin = document.getElementById("password-login");
let loginBtn = document.getElementById("log-in-btn");

loginBtn.addEventListener("click", () => {

    signInWithEmailAndPassword(auth, userEmailLogin.value, userPasswordLogin.value)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("logged in", user);
            window.location.replace("profile.html");
            new swal({
                title: "Congrats!",
                text: "You've Logged In",
                icon: "success",
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errormessage", errorMessage);
            new swal({
                title: "Error!",
                text: "Wrong Email or Password!. If this happens multiple times, Report!",
                icon: "error",
            });
        });

})

