document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const dob = document.getElementById("DOB").value;
  const curDate = document.getElementById("CurrentDate").value;

  // let curYear = curDate.split("-")[0];
  let dobYear = Number(dob.split)

  const Age = Number(curDate.split("-")[0]) - Number(dob.split("-")[0]);

  //   console.log(Age);

  document.getElementById("DOB").value = "";
  document.getElementById("CurrentDate").value = "";

  document.getElementById("myAge").innerText = Age;
  //   console.log(dob);
  //   console.log(curDate);
});
