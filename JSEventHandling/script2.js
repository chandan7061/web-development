let card = document.getElementById("card");
let heading = document.getElementById("heading");
let para = document.getElementById("para");

let bgColor = document.getElementById("bgColor");
let headingColor = document.getElementById("headingColor");
let paraColor = document.getElementById("paraColor");

bgColor.addEventListener("input", function () {
  card.style.backgroundColor = bgColor.value;
});

headingColor.addEventListener("input", function () {
  heading.style.color = headingColor.value;
});

paraColor.addEventListener("input", function () {
  para.style.color = paraColor.value;
});

function resetAll() {
  card.style.backgroundColor = "white";
  heading.style.color = "black";
  para.style.color = "black";

  bgColor.value = "#ffffff";
  headingColor.value = "#000000";
  paraColor.value = "#000000";
}
