import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = () => {
  // ✅ CORRECT WAY
  const emailValue = document.getElementById("email").value.trim();
  const passwordValue = document.getElementById("password").value.trim();

  if (!emailValue || !passwordValue) {
    alert("Please enter email and password");
    return;
  }

  signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then(() => {
      localStorage.setItem("user", emailValue);
      window.location.href = "dashboard.html";
    })
    .catch(err => {
      alert(err.message);
    });
};
