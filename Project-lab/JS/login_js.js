let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+(\d{2})?@e-uvt\.ro$/;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

  if (!emailRegex.test(email)) {
    alert("Email invalid! Formatul acceptat este: prenume.nume[cifre optionale]@e-uvt.ro");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Parola trebuie sa aiba cel putin 7 caractere, sa contina litere mici, mari, cifre si un caracter special!");
    return;
  }

  alert("Login reusit!");
  window.location.href = "home.html";
});