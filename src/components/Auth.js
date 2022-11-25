/* este arquivo contém o parâmetro se o usuário foi logado e sua informação de exibição.
a validação da autenticação do usuário deverá ser feita pelo backend e NÃO deverá ficar
guardada aqui.
*/

function setLoginAttributes(isLogged = false, username = '', userId = 0){
    // valor de login default = false, '' = deslogado
    localStorage.setItem('isLogged', isLogged);
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userId)
}
export default setLoginAttributes

// exemplos de utilização para pegar informações de login
localStorage.getItem('isLogged');
localStorage.getItem('username');
