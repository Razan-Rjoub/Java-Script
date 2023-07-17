const http = new XMLHttpRequest();
http.open("GET", "Task.json");
http.onload = function () {
  const personinfo = JSON.parse(this.responseText);
  var name = document.getElementsByClassName("name");
  var age = document.getElementsByClassName("Age");
  var major = document.getElementsByClassName("major");
  var uni = document.getElementsByClassName("university");
  var img = document.getElementsByClassName("image");
  var tbody = document.getElementsByTagName("tbody")[0];
  for (let i = 0; i < 4; i++) {
    var row = document.createElement("tr");
    tbody.appendChild(row);
    var namet = document.createElement("td");
    namet.textContent = personinfo[i].name;
    row.appendChild(namet);

    var aget = document.createElement("td");
    aget.textContent = personinfo[i].Age;
    row.appendChild(aget);

    var majort = document.createElement("td");
    majort.textContent = personinfo[i].Major;
    row.appendChild(majort);

    var universityt = document.createElement("td");
    universityt.textContent = personinfo[i].University;
    row.appendChild(universityt);

    var Imaget = document.createElement("td");
    var image = document.createElement("img");
    image.src = personinfo[i].Image;
    image.style.width = "200px";
    Imaget.appendChild(image);
    row.appendChild(Imaget);
  }
};
http.send();
