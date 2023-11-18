const passwordBox = document.getElementById("password");
const btn = document.getElementsByTagName("btn");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialChars = "!@#$%^&*()_+-={}[]|\<>,.?/";
const allChars = upperCase + lowerCase + number + specialChars;
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += specialChars[Math.floor(Math.random()* specialChars.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * 12)];
    }
    
    passwordBox.value = password;
    
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
