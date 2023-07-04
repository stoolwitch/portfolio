function hamburgerFunction() {
  var x = document.getElementById("headerMenu");
  if (x.className === "my-links hide") {
    x.className = "my-links";
  } else {
    x.className = "my-links hide";
  }
}