
function validateEmail(){
    let emailValue = '';
    let nameValue = '';
    let checkValue = true;
    
    localStorage.clear();

    nameValue = document.getElementById('nameBox').value;
    emailValue = document.getElementById('emailBox').value;
    checkValue = document.getElementById('checkBox').checked;

    if (emailValue.includes('@') && nameValue.length > 0){
        localStorage.setItem('name', nameValue);
        localStorage.setItem('email', emailValue);
        localStorage.setItem('agree', checkValue);
        document.getElementById('msg').innerHTML = `${nameValue}, seu presente foi enviado com sucesso para o e-mail <i>${emailValue}</i>.</br>Aproveite bem!`;
    } 
    else 
        alert('Por favor, confira seu nome e e-mail e tente novamente!');

    return;
}
