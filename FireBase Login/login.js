import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    //Your API keys
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

