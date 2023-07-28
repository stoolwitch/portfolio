function hamburgerFunction() {
  var x = document.getElementById("headerMenu");
  if (x.className === "my-links hideheadermenu") {
    x.className = "my-links";
  } else {
    x.className = "my-links hideheadermenu";
  }
}