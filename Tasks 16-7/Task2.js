function submitclick() {
    const name = document.getElementById('Name').value;
    const Age = document.getElementById('Age').value;
    const Gender = document.getElementById('Gender').value;
    const BirthDate = document.getElementById('BirthDate').value;
    const Image = document.getElementById('Image').value;
    const Description = document.getElementById('Description').value;
    const major = document.getElementById('major').value;

    const Html = document.getElementById('Html');
    if (Html.checked == true) {
        var Htmlcheck = document.getElementById('Html').value;
    }
    const css = document.getElementById('css');
    if (css.checked == true) {
        var csscheck = document.getElementById('css').value;
    }
    const js = document.getElementById('js');
    if (js.checked == true) {
        var jscheck = document.getElementById('js').value;
    }
    const siblingsnum = document.getElementById('siblingsnum').value;
    const siblingdescription = document.getElementById('siblingdescription').value;

    localStorage.setItem('name', name);
    localStorage.setItem('Age', Age);
    localStorage.setItem('Gender', Gender);
    localStorage.setItem('BirthDate', BirthDate);
    localStorage.setItem('Image', Image);
    localStorage.setItem('Description', Description);
    localStorage.setItem('major', major);
    localStorage.setItem('HTML', Htmlcheck);
    localStorage.setItem('css', csscheck);
    localStorage.setItem('js', jscheck);
    localStorage.setItem('sibilings number', siblingsnum);
    localStorage.setItem('description sibilings', siblingdescription);
}
firstcard();
function firstcard() {
    if (localStorage.length > 1) {
        document.getElementsByClassName('name')[0].innerHTML = localStorage.getItem('name');
        document.getElementsByClassName('age')[0].innerHTML = localStorage.getItem('Age');
        document.getElementsByClassName('gender')[0].innerHTML = localStorage.getItem('Gender');
        document.getElementsByClassName('birthdate')[0].innerHTML = localStorage.getItem('BirthDate');
        document.getElementsByClassName('image')[0].src = localStorage.getItem('Image');
    }
    else {
        document.getElementsByClassName('first')[0].outerHTML = '<p></p>'
    }
}
secondcard();
function secondcard() {
    if (localStorage.length > 1) {
        document.getElementsByClassName('des')[0].innerHTML = localStorage.getItem('Description');
        document.getElementsByClassName('major')[0].innerHTML = localStorage.getItem('major');
        const csschecked = localStorage.getItem('css');
        const htmlchecked = localStorage.getItem('HTML');
        const jschecked = localStorage.getItem('js');
        if (csschecked == 'on' && htmlchecked == 'on' && jschecked == 'on') {
            document.getElementsByClassName('lang')[0].innerHTML = 'HTML,CSS,JS'
        }
        else if (csschecked == 'on' && htmlchecked == 'on') {
            document.getElementsByClassName('lang')[0].innerHTML = 'HTML,CSS'
            console.log('ijk')
        }
        else if (csschecked == 'on' && jschecked == 'on') {
            document.getElementsByClassName('lang')[0].innerHTML = 'CSS,JS'
        }
        else if (htmlchecked == 'on' && jschecked == 'on') {
            document.getElementsByClassName('lang')[0].innerHTML = 'HTML,JS'
        }
        else if (csschecked == 'on') {
            document.getElementsByClassName('lang')[0].innerHTML = 'CSS'
        }
        else if (htmlchecked == 'on') {
            document.getElementsByClassName('lang')[0].innerHTML = 'HTML'
        }
        else if (jschecked == 'on') {
            document.getElementsByClassName('lang')[0].innerHTML = 'JS'
        }
    }
    else {
        document.getElementsByClassName('second')[0].outerHTML = '<p></p>'
    }
}
thirdcard();
function thirdcard(){
    if(localStorage.length>1){
        document.getElementsByClassName('siblingsnum')[0].innerHTML = localStorage.getItem('sibilings number');
        document.getElementsByClassName('siblingsdes')[0].innerHTML = localStorage.getItem('description sibilings');
    }
    else {
        document.getElementsByClassName('third')[0].outerHTML = '<p></p>'
    }
}