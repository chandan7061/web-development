// SubmitButton
document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // Inputs
    
    const fn = document.getElementById("fullName").value.trim();
    const em = document.getElementById("email").value.trim();
    const ph = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const gndr = document.querySelector("input[name='gender']:checked")?.value;
    const qlf = document.getElementById("qualification").value;
    const mrks = document.getElementById("marks").value.trim();
    const crs = document.getElementById("course").value;
    const adrs = document.getElementById("address").value.trim();
    const cty = document.getElementById("city").value.trim();
    const pin = document.getElementById("pin").value.trim();

    const timings = [];

    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    // Clear Old Errors

    document.getElementById("fullNameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("dobError").innerText = "";
    document.getElementById("qualificationError").innerText = "";
    document.getElementById("marksError").innerText = "";
    document.getElementById("courseError").innerText = "";
    document.getElementById("timingsError").innerText = "";
    document.getElementById("addressError").innerText = "";
    document.getElementById("cityError").innerText = "";
    document.getElementById("pinError").innerText = "";

    let valid = true;

    // Full Name Validation

    if (fn == "") {
      document.getElementById("fullNameError").innerText =
        "Please Enter Full Name";

      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(fn)) {
      document.getElementById("fullNameError").innerText =
        "Only Alphabets And Spaces Allowed";

      valid = false;
    }

    // Email Validation

    if (em == "") {
      document.getElementById("emailError").innerText = "Please Enter Email";

      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      document.getElementById("emailError").innerText =
        "Please Enter Valid Email";

      valid = false;
    }

    // Phone Validation

    if (ph == "") {
      document.getElementById("phoneError").innerText =
        "Please Enter Mobile Number";

      valid = false;
    } else if (!/^[6-9][0-9]{9}$/.test(ph)) {
      document.getElementById("phoneError").innerText =
        "Enter Valid Indian Mobile Number";

      valid = false;
    }

    // DOB Validation

    if (dob == "") {
      document.getElementById("dobError").innerText =
        "Please Select Date Of Birth";

      valid = false;
    } else {
      let birthDate = new Date(dob);
      let today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();

      if (age < 15) {
        document.getElementById("dobError").innerText =
          "Minimum Age Should Be 15";

        valid = false;
      }
    }

    // Gender Validation

    if (!gndr) {
      document.getElementById("dobError").innerText = "Please Select Gender";

      valid = false;
    }

    // Qualification Validation

    if (qlf == "") {
      document.getElementById("qualificationError").innerText =
        "Please Select Qualification";

      valid = false;
    }

    // Marks Validation

    if (mrks == "") {
      document.getElementById("marksError").innerText =
        "Please Enter Percentage / Grade";

      valid = false;
    } else if (!(/^(100|[0-9]{1,2})$/.test(mrks) || /^[A-Fa-f]$/.test(mrks))) {
      document.getElementById("marksError").innerText =
        "Enter Valid Percentage Or Grade";

      valid = false;
    }

    // Course Validation

    if (crs == "") {
      document.getElementById("courseError").innerText = "Please Select Course";

      valid = false;
    }

    // Timing Validation

    if (timings.length == 0) {
      document.getElementById("timingsError").innerText =
        "Please Select Batch Timing";

      valid = false;
    }

    // Address Validation

    if (adrs == "") {
      document.getElementById("addressError").innerText =
        "Please Enter Address";

      valid = false;
    }

    // City Validation

    if (cty == "") {
      document.getElementById("cityError").innerText = "Please Enter City";

      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(cty)) {
      document.getElementById("cityError").innerText = "Only Alphabets Allowed";

      valid = false;
    }

    // Pin Validation

    if (pin == "") {
      document.getElementById("pinError").innerText = "Please Enter Pin Code";

      valid = false;
    } else if (!/^[0-9]{6}$/.test(pin)) {
      document.getElementById("pinError").innerText =
        "Enter Valid 6 Digit Pin Code";

      valid = false;
    }

    // Final Submission

    if (valid) {
      console.log("Full Name :", fn);
      console.log("Email :", em);
      console.log("Phone :", ph);
      console.log("DOB :", dob);
      console.log("Gender :", gndr);
      console.log("Qualification :", qlf);
      console.log("Marks :", mrks);
      console.log("Course :", crs);
      console.log("Timings :", timings);
      console.log("Address :", adrs);
      console.log("City :", cty);
      console.log("Pin :", pin);

      alert("Registration Successful");
    }
  });

// ResetButton
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });
