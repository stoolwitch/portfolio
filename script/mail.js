var fauxEmail = document.querySelector(".mail").textContent;
var vraiEmail = fauxEmail.replace("(at)", "@");
document.querySelector(".mail").innerHTML = "><a id='mail' href='mailto:" + vraiEmail + "'>" + vraiEmail + "</a>";