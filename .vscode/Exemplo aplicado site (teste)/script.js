var email = document.getElementById('email')
var senha = document.getElementById('senha')
function validação(){
    if (email.value=='' || senha.value==''){
        alert('Faltam informações')
    }
    else{
        alert('Cadastro realizado com sucesso')
    }
}