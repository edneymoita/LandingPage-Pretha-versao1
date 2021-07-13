
function validateEmail(){
    let emailValue = '';
    
    emailValue = document.getElementById('emailBox').value;

    if (emailValue.includes('@')){
        localStorage.clear();
        localStorage.setItem('email', emailValue);
        document.getElementById('msg').innerHTML = `Presente enviado para o e-mail <i>${emailValue}</i>.</br>Aproveite bem!`;
    } else {
        document.getElementById('msg').value = 'E-mail inválido! Favor verificar.';
        alert(document.getElementById('msg').value);
    }
    return true;
}
