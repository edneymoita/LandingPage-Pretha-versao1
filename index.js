
function validateEmail(){
    let emailValue = '';
    let nameValue = '';
    
    nameValue = document.getElementById('nameBox').value;
    emailValue = document.getElementById('emailBox').value;

    if (emailValue.includes('@') && nameValue.length > 0){
        localStorage.clear();
        localStorage.setItem('name', nameValue);
        localStorage.setItem('email', emailValue);
        document.getElementById('msg').innerHTML = `${nameValue}, seu presente foi enviado com sucesso para o e-mail <i>${emailValue}</i>.</br>Aproveite bem!`;
    } else {
        document.getElementById('msg').value = 'Por favor, confira seu nome e e-mail e tente novamente!';
        alert(document.getElementById('msg').value);
    }
    return true;
}
