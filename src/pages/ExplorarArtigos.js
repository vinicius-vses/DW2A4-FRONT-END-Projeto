import Artigos from "../components/Artigos";
import Topicos from "../components/Topicos";
import { Link, useNavigate } from "react-router-dom"

// MOCK PARA TESTE DE ROUTES -> ESTE ARQUIVO DEVE SER AJUSTADO TANTO EM LAYOUT QUANTO FUNCIONAMENTO!
function ExplorarArtigos() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Artigos</h1>
            <p>Aqui deverá aparecer os artigos</p>
            <Topicos />
        </div>
    )
}

export default ExplorarArtigos