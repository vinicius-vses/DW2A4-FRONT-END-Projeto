/* este arquivo contém o parâmetro se o usuário foi logado e sua informação de exibição.
a validação da autenticação do usuário deverá ser feita pelo backend e NÃO deverá ficar
guardada aqui.
*/

function setLoginAttributes(isLogged = false, username = ''){ // valor de login default = false, '' = deslogado
    localStorage.setItem('isLogged', isLogged);
    localStorage.setItem('username', username);
}
export default setLoginAttributes

localStorage.getItem('isLogged');
localStorage.getItem('username');
