import SmallIcon from './SmallIcon';
import setLoginAttributes from './Auth';
import { useNavigate } from 'react-router-dom';
import Input from "../components/Input";

function MeuPerfil() {
    const navigate = useNavigate();

    const onSubmit = e =>{
        e.preventDefault();
    }

    function logout(){
        console.log("Deverá aparecer confirmação de logout e então deslogar.")
        setLoginAttributes(); // parâmetros default = deslogar
        navigate('/')
    }

    return (
        <div>
            <div className="formulario-perfil">
                <button className='input-style submit logout'
                    onClick={() => logout()}>
                    <SmallIcon
                        src="https://static.thenounproject.com/png/205237-200.png"
                        label="Botão indicando ação para sair da conta do usuário" />
                    Fazer logout
                </button>
                <h1>Meu Perfil</h1>
                <form onSubmit={onSubmit}>
                    <Input
                        className="input-style"
                        label="Nome completo:"
                        type="text" id="nome-perfil"
                    />
                    <Input
                        className="input-style"
                        label="Email institucional:"
                        type="email" id="email-login"
                    />
                    <Input
                        className="input-style"
                        label="Digite a senha atual:   *"
                        type="password" id="pass-atual-perfil"
                    />
                    <Input
                        className="input-style"
                        label="Digite a nova senha:"
                        type="password" id="pass-nova-perfil"
                    />
                    <div className="input-group">
                        <Input
                            className="input-style submit"
                            value="Salvar alterações"
                            type="submit"
                        />
                        <Input
                            className="input-style submit excluir"
                            value="Excluir minha conta"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MeuPerfil