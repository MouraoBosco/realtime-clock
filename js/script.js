var myVar = setInterval(myTimer ,1000);
function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString('pt-Br', {hour12: true})
/*
Function for changing between timezones
d.toLocaleTimeString('en-Us', {12hour: true})
*/
}

