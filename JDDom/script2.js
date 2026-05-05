// Assignment 1
function showA1() {
  let name = document.getElementById("name1").value;
  let city = document.getElementById("city1").value;

  let result = document.getElementById("result1");

  result.style.display = "block";
  result.innerHTML = "Name: " + name + "<br>City: " + city;
}

// Assignment 2
function showA2() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let result = document.getElementById("result2");

  result.style.display = "block";
  result.innerHTML = "Email: " + email + "<br>Password: " + password;

  // background change after click
  document.getElementById("a2box").style.backgroundColor = "lightblue";
}

// Assignment 3
function showA3() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;

  let result = document.getElementById("result3");

  result.style.display = "block";
  result.innerHTML = "Full Name: " + fname + " " + lname;
}
