import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    //Your API keys
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
