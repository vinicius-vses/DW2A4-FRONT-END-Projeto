import SmallIcon from './SmallIcon';
import Auth from './Auth';
import setLoginAttributes from './Auth';
import { useNavigate } from 'react-router-dom';

function MeuPerfil() {
    const navigate = useNavigate();

    function logout(){
        console.log("Deverá aparecer confirmação de logout e então deslogar.")
        setLoginAttributes(); // parâmetros default = deslogar
        navigate('/')
    }

    return (
        <div>
            <h1>Meu Perfil</h1>
            <a>Aqui aparecerão os dados do meu perfil</a>
            <br/><br/>
            <button className='input-style submit'
            onClick={() => logout()}>
                <SmallIcon
                    src="https://static.thenounproject.com/png/205237-200.png"
                    label="Botão indicando ação para sair da conta do usuário" />
                Fazer logout
            </button>
        </div>
    )
}

export default MeuPerfil