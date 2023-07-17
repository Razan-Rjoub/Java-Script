function checkFname() {
    const inputname = document.getElementById('FName').value;

    const regex = /^[^\d]+$/;
    if (!regex.test(inputname)) {
        document.getElementById('check').innerHTML = 'The name should contain only letters.';
    } else {
        document.getElementById('check').innerHTML = 'The first name is true';
    }

}
function checkLname() {
    const inputLname = document.getElementById('LName').value;

    const regex = /^[^\d]+$/;
    if (!regex.test(inputLname)) {
        document.getElementById('checkl').innerHTML = 'The name should contain only letters.';
    } else {
        document.getElementById('checkl').innerHTML = 'The last name is true';
    }

}
function checkBirth() {
    const inputBirth = document.getElementById('Birth').value;
    const regex = /^(0?[1-9]|[1-2][0-9]|3[0-1])-(0?[1-9]|1[0-2])-\d{4}$/

    if (!regex.test(inputBirth)) {
        document.getElementById('checkB').innerHTML = 'The Birth date should be dd-mm-yyyy.';
    }
    else {
        document.getElementById('checkB').innerHTML = 'The Birth date is true';
    }
}
function checkEmail() {
    const inputemail = document.getElementById('email').value;
    const regex = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{3}$/
    if (!regex.test(inputemail)) {
        document.getElementById('checkE').innerHTML = 'The email  not true';
    }
    else {
        document.getElementById('checkE').innerHTML = 'The email is true';
    }
}
function checkEmailconfirm() {
    const inputemailc = document.getElementById('emailconfirm').value;
    const regex = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{3}$/
    if (!regex.test(inputemailc)) {
        document.getElementById('checkEC').innerHTML = 'The email  not true';
    }
    else {
        document.getElementById('checkEC').innerHTML = 'The email is true';
    }
}
function checkPassword(){
    const inputpass = document.getElementById('password').value;
    const regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!regex.test(inputpass)) {
        document.getElementById('checkP').innerHTML = 'The password  not true';
    }
    else {
        document.getElementById('checkP').innerHTML = 'The password is true';
    }
}
function checkpassconfirm(){
    const inputpass = document.getElementById('passconfirm').value;
    const regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d @]{8,}$/;
    if (!regex.test(inputpass)) {
        document.getElementById('checkPC').innerHTML = 'The password  not true';
    }
    else {
        document.getElementById('checkPC').innerHTML = 'The password is true';
    } 
}