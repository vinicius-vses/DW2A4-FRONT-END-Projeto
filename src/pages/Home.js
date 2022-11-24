import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { mockDescricao } from '../mock';

// MOCK PARA TESTE DE ROUTES -> ESTE ARQUIVO DEVE SER AJUSTADO TANTO EM LAYOUT QUANTO FUNCIONAMENTO!
function Home() {

    const navigate = useNavigate();

    const isLogged = (localStorage.getItem('isLogged') === 'true');

    const onExplorarArtigosBtn = e => {
        e.preventDefault();
        navigate('/artigos');
    }

    const onCriarArtigoBtn = e => {
        e.preventDefault();
        navigate('/criar');
    }

    return (
        <div className="home">
            <h1>φ 4 Free</h1>
            <p>Bem-vindo! Prepare-se para mergulhar em um mundo de conhecimento.</p>

            <div className="home-buttons">
                <Input
                    className="input-style submit"
                    style={{ marginRight: '16px' }}
                    value="Explorar artigos"
                    type="submit"
                    onClick={onExplorarArtigosBtn}
                />
                {isLogged ?
                    <Input
                        className="input-style submit"
                        style={{ marginLeft: '16px' }}
                        value="Criar novo artigo"
                        type="submit"
                        onClick={onCriarArtigoBtn}
                    />
                    : ''
                }

            </div>
            <br /><br />
            <img src='/banner-home.jpg'
                alt="Banner de estudos da página inicial"
                width="100%"
                height="300px">
            </img>
            <div className="home-subtopic">
            <h1>Sobre o projeto</h1>
            <div className="home-buttons">
            <p>{mockDescricao}</p>
            <img src='/learning-home.jpg'
                style={{padding: '24px'}}
                alt="Imagem de uma professora e aluno"
                width="350px"
                height="250px">
            </img>
            </div>
            </div>
        </div>
    )
}

export default Home