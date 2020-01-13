function openCity(event, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display  = "block";
  event.currentTarget.className += " active"
}

function closeContent(event) {
  event.currentTarget.parentElement.style.display = "none"
}

document.getElementById("defaultOpen").click()