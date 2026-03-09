import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = () => {
  const email = email.value;
  const password = password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      localStorage.setItem("user", email);
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};
