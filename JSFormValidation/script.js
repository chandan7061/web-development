function submit() {
  const fn = document.getElementById("fullName").value;
  const em = document.getElementById("email").value;
  const ph = document.getElementById("phone").value;

  if (!/^[A-Za-z\s]+$/.test(fn)) {
    document.getElementById("nameError").innerText = "Invalid Full Name";
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(em)) {
    document.getElementById("emailError").innerText = "Invalid Email";
  }

  if (!/^[0-9]+$/.test(ph)) {
    document.getElementById("phoneError").innerText = "Invalid Phone Number";
  }
}
