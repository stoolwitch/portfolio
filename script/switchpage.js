var containers = document.getElementsByClassName("pageContainers");
var activepagename = document.getElementById("activepagename");
const links = document.querySelectorAll('.navlink');

function switchPage(event) {
  const thisLink = event.target;
  var currentID = thisLink.id;
  links.forEach(link => {
    link.classList.remove('activepage');
  });
  thisLink.classList.add("activepage");
  activepagename.innerHTML = thisLink.innerHTML;
  document.body.style.backgroundColor = "var(--" + currentID + ")";
  for (var i = 0; i < containers.length; i++) {
    containers[i].classList.add('hide');
  }
  document.getElementById(currentID + "Container").classList.remove('hide');
  hamburgerFunction();
}