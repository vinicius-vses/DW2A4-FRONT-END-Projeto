import { useLocation } from 'react-router-dom';

function Footer(){
    const location = useLocation();
    return(
        <>
        {
            location.pathname === '/login' || location.pathname === '/cadastro'
            ? null
            : 
            <>
                <div className="footer-container">
                    <br/>
                    <span>φ 4 Free</span> <a href="" target="_self">Termos de Privacidade</a> <a href="" target="_self">Termos de Uso</a> <a href="http://localhost:3000/DominioNegocio" target="_self">Sobre</a>
                </div>
            </>
        }
        </>
    )
}

export default Footer