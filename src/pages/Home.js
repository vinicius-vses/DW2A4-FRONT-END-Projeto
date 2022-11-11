import Input from "../components/Input"
import {Link, useNavigate} from "react-router-dom"

// MOCK PARA TESTE DE ROUTES -> ESTE ARQUIVO DEVE SER AJUSTADO TANTO EM LAYOUT QUANTO FUNCIONAMENTO!
function Home() {
    const navigate = useNavigate();

    const onExplorarArtigosBtn = e =>{
        e.preventDefault();
        navigate('/artigos');
    }

    const onCriarArtigoBtn = e =>{
        e.preventDefault();
        navigate('/criar');
    }

    return (
        <>
            <h1>Home</h1>
            <p>Aqui deverá aparecer a home</p>
            <Input
                className="input-style submit"
                value="Explorar artigos"
                type="submit"
                onClick={onExplorarArtigosBtn}
            />

            <Input
                className="input-style submit"
                value="Criar novo artigo"
                type="submit"
                onClick={onCriarArtigoBtn}
            />

        </>
    )
}

export default Home