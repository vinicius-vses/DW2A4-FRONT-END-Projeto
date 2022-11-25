# Mini manual de componentes e utilização de arquivos
## PARA INICIAR O PROJETO DÊ O COMANDO:
> npm install

Este projeto está sem o node_modules, mas após executar o comando ele aparecerá no projeto.
Feito isso basta ir na pasta do projeto rodar 
> 'npm start'

## Verificação de login
A verificação de que o usuário fez login está no arquivo **src/components/Auth.js**.
Por hora, não há validação de login/cadastro e os dados recebidos ali são meramente estáticos
(Feitos como um mock de testes independente das entradas do usuário), mas podem ser usados normalmente sem alterações drásticas na pasta.

### Função para setar sessão do usuário:
<p align="center">
  <img src="./screenshots/Auth.png" alt="Componente Auth" />
</p>
Um exemplo de utilização deste recurso para setar o usuário de testes está nas telas de login e cadastro
que por horam passam os seguinte no OnSubmit:

>      setLoginAttributes(true, 'Usuário de Teste, Jorge', 1)

Futuramente poderemos atualizar o método Auth.js para que receba o email e senha utilizados pelo usuário, assim como
parâmetros passados por ele no Input:

> setLoginAttributes(true, user.nome, user.id, user.email, user.pass)

Essas informações serão capturadas pelas demais telas com um método get nativo do JavaScript (Ilustrado na figura Componente Auth)
Um exemplo de uso é no Header da aplicação, ao capturar o parâmetro resultado de
> localStorage.getItem('isLogged');
Podemos definir se queremos que nosso componente exibe a opção de fazer login/cadastro ou a opção de acessar o perfil
do usuário:

<p align="center">
  <img src="./screenshots/Header.png" alt="Componente Header" />
</p>

Os parâmetros default da aplicação para o usuário são respectivamente:
* isLogged = false
* username = ''
* userId = 0

Considerando isso, sempre que os parâmetros default da aplicação estiverem setados, o usuário estará desconectado.
Simulando um logout, bastaria chamar o método **setLoginAttributes()** sem passar nenhum parâmetro que automaticamente
ele atribuiria ao Application local os parâmetros default pré estabelecidos e o isLogged = false.