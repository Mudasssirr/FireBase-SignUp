import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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


// For Porfile //

let emailVerfifcationbtn = document.getElementById("email-verification-btn");

emailVerfifcationbtn.addEventListener('click', () => {
    sendEmailVerification(auth.currentUser)
        .then(() => {
            alert('Your Email Verification has been sent');
            new swal({
                title: "Email Sent",
                text: "You're Email Verification has been sent!",
                icon: "success",
            });
        });
})

let logOut = document.getElementById("log-out-btn");

logOut.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            window.location.replace("login.html");
        }).catch((error) => {
            console.log(error)
        });
})

auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log(user)
        if (user.emailVerified === true) {
            emailVerfifcationbtn.style.display = 'none';
        }
        document.getElementById("user-email").value = user.email;
        if (user.emailVerified) {
            document.getElementById("email-verification").innerHTML = "Email verified";
        } else {
            document.getElementById("email-verification").innerHTML = "Email not verified";
        }
    } else {
    }
});