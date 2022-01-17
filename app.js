function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}


function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}
const randomFunctions = {
    getRandomLowerCase,
    getRandomUpperCase,
    getRandomNumber
}


function generatePassword() {
    let generatedPassword = "";
    const passLength = 12;
    for (let i = 0; i < passLength; i++) {
         generatedPassword += Object.values(randomFunctions)[Math.floor(Math.random() * 3)]()
    }
    return generatedPassword;
}
const spanResult = document.getElementById('result');
const generateBtn = document.getElementById('generate');
const clpbordBtn = document.getElementById('clipboard');


generateBtn.addEventListener('click', function () {
    spanResult.innerText = generatePassword()
})


clpbordBtn.addEventListener('click', function(){
    const password = spanResult.innerText;
    if(!password)
    return

    const textArea = document.createElement("textarea");

    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy')
    textArea.remove();
    clpbordBtn.className = "copyOkay"
    setTimeout(() => {
        clpbordBtn.classList.remove('copyOkay');
    }, 2000)

})