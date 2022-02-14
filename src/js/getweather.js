var lt = sessionStorage.getItem('ulat');
var ln = sessionStorage.getItem('ulot');
var hr = (new Date()).getHours();
console.log(hr);
if(hr < 18 && hr > 12) {
  document.getElementById('weathercont').style.backgroundImage = "url(src/imgs/noon.jpg)";
  document.getElementsByClassName("maincont")[0].style.color = "#96120e";
  document.getElementsByClassName("maincont")[1].style.color = "#96120e";
  document.getElementsByClassName("maincont")[2].style.color = "#96120e";
} else if(hr > 18) {
  document.getElementById('weathercont').style.backgroundImage = "url(src/imgs/night.jpg)";
  document.getElementsByClassName("maincont")[0].style.color = "violet";
  document.getElementsByClassName("maincont")[1].style.color = "violet";
  document.getElementsByClassName("maincont")[2].style.color = "violet";
} else if(hr < 12) {
  document.getElementById('weathercont').style.backgroundImage = "url(src/imgs/day.jpg)";
  document.getElementsByClassName("maincont")[0].style.color = "cyan";
  document.getElementsByClassName("maincont")[1].style.color = "cyan";
  document.getElementsByClassName("maincont")[2].style.color = "cyan";
}
