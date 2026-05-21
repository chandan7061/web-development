document.getElementById("passwordForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const website = document.getElementById("website").value.trim();

  const username = document.getElementById("username").value.trim();

  const password = document.getElementById("password").value.trim();

  if (website == "" || username == "" || password == "") {
    alert("Please Fill All Fields");

    return;
  }

  const credential = {
    website: website,
    username: username,
    password: password,
  };

  let storedData = JSON.parse(localStorage.getItem("passwordData")) || [];

  storedData.push(credential);

  localStorage.setItem("passwordData", JSON.stringify(storedData));

  alert("Data Added Successfully");

  document.getElementById("website").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

document.getElementById("downloadBtn").addEventListener("click", () => {

  let storedData = JSON.parse(localStorage.getItem("passwordData")) || [];

  if (storedData.length == 0) {
    alert("No Data Available");

    return;
  }

  let content = "Website\tUsername\tPassword\n\n";

  storedData.forEach((item) => {
    content += `${item.website}\t${item.username}\t${item.password}\n`;
  });

  const blob = new Blob([content], { type: "text/plain" });

  const fileURL = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = fileURL;

  a.download = "password-data.txt";

  a.click();

  URL.revokeObjectURL(fileURL);

  localStorage.removeItem("passwordData");

  alert("Download Complete & Storage Cleared");
});
