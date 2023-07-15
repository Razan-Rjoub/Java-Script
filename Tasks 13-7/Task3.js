document.getElementById("country").addEventListener("click", clickCountry);

function clickCountry() {
    var select = document.getElementById("country");
    var selected = select.options[select.selectedIndex].value;
    var country = document.getElementsByTagName("img")[0];
    if (selected == "palestine") {
        country.src =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1200px-Flag_of_Palestine.svg.png";
    } else {
        country.src =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1200px-Flag_of_Jordan.svg.png";
    }
}
