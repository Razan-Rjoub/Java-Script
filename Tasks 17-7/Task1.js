function loaddata() {
  const http = new XMLHttpRequest();
  http.open("GET", "Task.json");
  http.onload = function () {
    const personinfo = JSON.parse(this.responseText);
    console.log(personinfo);

    var tbody = document.getElementsByTagName("tbody")[0];
    for (let i = 0; i < 4; i++) {
    
      var row = `<tr style="font-size: 25px"><td>${personinfo[i].name}</td>
      <td >${personinfo[i].Age}</td>
      <td>${personinfo[i].Major}</td>
      <td>${personinfo[i].University}</td>
      <td><img src=${personinfo[i].Image} style="width:200px"></td>
     </tr>`;
tbody.innerHTML+=row

 
    }
  };
  http.send();
}
  // var row = document.createElement("tr");
      // tbody.appendChild(row);
     // var namet = document.createElement("td");
      // namet.textContent = personinfo[i].name;
      // row.appendChild(namet);

      // var aget = document.createElement("td");
      // aget.textContent = personinfo[i].Age;
      // row.appendChild(aget);

      // var majort = document.createElement("td");
      // majort.textContent = personinfo[i].Major;
      // row.appendChild(majort);

      // var universityt = document.createElement("td");
      // universityt.textContent = personinfo[i].University;
      // row.appendChild(universityt);

      // var Imaget = document.createElement("td");
      // var image = document.createElement("img");
      // image.src = personinfo[i].Image;
      // image.style.width = "200px";
      // Imaget.appendChild(image);
      // row.appendChild(Imaget);