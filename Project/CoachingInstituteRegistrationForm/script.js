function validateForm() {
  // Input Values

  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let dob = document.getElementById("dob").value;
  let qualification = document.getElementById("qualification").value;
  let percentage = document.getElementById("percentage").value.trim();
  let course = document.getElementById("course").value;
  let batch = document.getElementById("batch").value;
  let address = document.getElementById("address").value.trim();
  let city = document.getElementById("city").value.trim();
  let pincode = document.getElementById("pincode").value.trim();
  let guardian = document.getElementById("guardian").value.trim();
  let guardianMobile = document.getElementById("guardianMobile").value.trim();
  let hear = document.getElementById("hear").value;

  // Clear Old Errors

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("mobileError").innerText = "";
  document.getElementById("dobError").innerText = "";
  document.getElementById("qualificationError").innerText = "";
  document.getElementById("percentageError").innerText = "";
  document.getElementById("courseError").innerText = "";
  document.getElementById("batchError").innerText = "";
  document.getElementById("addressError").innerText = "";
  document.getElementById("cityError").innerText = "";
  document.getElementById("pincodeError").innerText = "";
  document.getElementById("guardianError").innerText = "";
  document.getElementById("guardianMobileError").innerText = "";
  document.getElementById("hearError").innerText = "";

  let valid = true;

  // Full Name Validation

  if (fullName == "") {
    document.getElementById("nameError").innerText = "Please enter full name";

    valid = false;
  } else if (!/^[A-Za-z\s]+$/.test(fullName)) {
    document.getElementById("nameError").innerText =
      "Only alphabets and spaces allowed";

    valid = false;
  }

  // Email Validation

  if (email == "") {
    document.getElementById("emailError").innerText =
      "Please enter email address";

    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").innerText =
      "Please enter valid email";

    valid = false;
  }

  // Mobile Validation

  if (mobile == "") {
    document.getElementById("mobileError").innerText =
      "Please enter mobile number";

    valid = false;
  } else if (!/^[6-9][0-9]{9}$/.test(mobile)) {
    document.getElementById("mobileError").innerText =
      "Enter valid 10-digit Indian mobile number";

    valid = false;
  }

  // Date of Birth Validation

  if (dob == "") {
    document.getElementById("dobError").innerText =
      "Please select date of birth";

    valid = false;
  } else {
    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (age < 15) {
      document.getElementById("dobError").innerText =
        "Student must be at least 15 years old";

      valid = false;
    }
  }

  // Qualification Validation

  if (qualification == "") {
    document.getElementById("qualificationError").innerText =
      "Please select qualification";

    valid = false;
  }

  // Percentage / Grade Validation

  if (percentage == "") {
    document.getElementById("percentageError").innerText =
      "Please enter percentage or grade";

    valid = false;
  } else if (
    !(/^(100|[0-9]{1,2})$/.test(percentage) || /^[A-Fa-f]$/.test(percentage))
  ) {
    document.getElementById("percentageError").innerText =
      "Enter valid percentage (0-100) or grade (A-F)";

    valid = false;
  }

  // Course Validation

  if (course == "") {
    document.getElementById("courseError").innerText = "Please select course";

    valid = false;
  }

  // Batch Validation

  if (batch == "") {
    document.getElementById("batchError").innerText =
      "Please select batch timing";

    valid = false;
  }

  // Address Validation

  if (address == "") {
    document.getElementById("addressError").innerText =
      "Please enter residential address";

    valid = false;
  }

  // City Validation

  if (city == "") {
    document.getElementById("cityError").innerText = "Please enter city";

    valid = false;
  } else if (!/^[A-Za-z\s]+$/.test(city)) {
    document.getElementById("cityError").innerText =
      "City should contain alphabets only";

    valid = false;
  }

  // Pincode Validation

  if (pincode == "") {
    document.getElementById("pincodeError").innerText = "Please enter pin code";

    valid = false;
  } else if (!/^[0-9]{6}$/.test(pincode)) {
    document.getElementById("pincodeError").innerText =
      "Enter valid 6-digit pin code";

    valid = false;
  }

  // Guardian Name Validation

  if (guardian == "") {
    document.getElementById("guardianError").innerText =
      "Please enter guardian name";

    valid = false;
  } else if (!/^[A-Za-z\s]+$/.test(guardian)) {
    document.getElementById("guardianError").innerText =
      "Only alphabets and spaces allowed";

    valid = false;
  }

  // Guardian Mobile Validation

  if (guardianMobile == "") {
    document.getElementById("guardianMobileError").innerText =
      "Please enter guardian contact number";

    valid = false;
  } else if (!/^[6-9][0-9]{9}$/.test(guardianMobile)) {
    document.getElementById("guardianMobileError").innerText =
      "Enter valid 10-digit contact number";

    valid = false;
  }

  // Hear About Us Validation

  if (hear == "") {
    document.getElementById("hearError").innerText = "Please select one option";

    valid = false;
  }

  // Final Validation

  if (valid) {
    alert("Registration Successful");
  }

  return valid;
}
