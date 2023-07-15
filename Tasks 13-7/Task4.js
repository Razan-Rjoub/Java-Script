document.getElementById("fontFamily").addEventListener("click", changeFontFamily);
document.getElementById("fontSize").addEventListener("click", changeFontSize);
document.getElementById("Italic").addEventListener("click", changeFontStyle);
document.getElementById("Bold").addEventListener("click", changeFontStyle);
document.getElementById("Underline").addEventListener("click", changeFontStyle);
var text = document.getElementsByTagName("div")[0];
function changeFontFamily() {
    var select = document.getElementById("fontFamily");
    var selected = select.options[select.selectedIndex].value;

    if (selected == "fantasy") {
        text.style.fontFamily = " fantasy";
    } else {
        text.style.fontFamily = "Times New Roman";
    }
}
function changeFontSize() {
    var select = document.getElementById("fontSize");
    var selected = select.options[select.selectedIndex].value;

    if (selected == "20px") {
        text.style.fontSize = "20px";
    } else text.style.fontSize = "10px";
}
function changeFontStyle() {
    var Italic = document.getElementById("Italic");
    var bold = document.getElementById("Bold");
    var Underline = document.getElementById("Underline");

    if (Italic.checked == true) {
        text.style.fontStyle = "Italic";
    }
    if (bold.checked == true) {
        text.style.fontWeight = "Bold";
    }
    if (Underline.checked == true) {
        text.style.textDecoration = "underline";
    }
    if (Italic.checked == false) {
        text.style.fontStyle = "normal";
    }
    if (bold.checked == false) {
        text.style.fontWeight = "normal";
    }
    if (Underline.checked == false) {
        text.style.textDecoration = "none";
    }
}
