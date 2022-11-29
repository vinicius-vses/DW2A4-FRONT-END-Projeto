import ProfileIcon from './ProfileIcon';
import SmallIcon from './SmallIcon';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

function Header() {
    /*
    isLogged = true (exibe opção para ir para o perfil)
    isLogged = false (exibe opção que leva para cadastro ou login)

    goBackTo = #idDaPagina (setinha leva para página anterior)
    goBackTo = null (setinha não aparece / não leva para lugar algum) -> RECOMENDADO: Sempre ser null na Home;
    
    Não aparecer header ou footer no Login/Cadastro
    */
    const isLogged = (localStorage.getItem('isLogged') === 'true');
    const navigate = useNavigate();
    const location = useLocation();

    function goBack() {
        if (location.pathname == '/' || location.pathname == '/login' || location.pathname == '/cadastro')
            return false;
        return true;
    }

    return (
        <>
            {
                location.pathname === '/login' || location.pathname === '/cadastro'
                    ? null

                    : <div className="header-container">
                        {goBack()
                            ? <button onClick={() => navigate(-1)}>
                                <SmallIcon
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Google_material_icons_arrow_back_24px.svg/1024px-Google_material_icons_arrow_back_24px.svg.png"
                                    label="Imagem com seta indicando ação de voltar para a tela anterior" /></button>
                            : <div style={{ marginRight: 'auto', padding: '16px' }}></div>
                        }
                        {isLogged
                            ? <ProfileIcon />
                            : <> <Link to="/login"><span>Faça login</span></Link> <Link to="/cadastro" id="cadastrar-btn" className='input-style submit'>Cadastre-se</Link></>
                        }
                    </div>
            }
        </>
    )
}

export default Header