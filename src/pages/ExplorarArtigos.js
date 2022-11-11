import Artigos from "../components/Artigos";
import Topicos from "../components/Topicos";
import { Link, useNavigate } from "react-router-dom"

// MOCK PARA TESTE DE ROUTES -> ESTE ARQUIVO DEVE SER AJUSTADO TANTO EM LAYOUT QUANTO FUNCIONAMENTO!
function ExplorarArtigos() {
    const navigate = useNavigate();

    const artigos = [ //No funcionamento real o array virá direto do BD (ex: SELECT * tbArtigos WHERE TOPICO = "#financeira")
        { "id": 1, "idAutor": 2, "titulo": 'Este é um artigo estático de testes', "autor": 'Fulano' },
        { "id": 2, "idAutor": 1, "titulo": 'Esses artigos deverão ser substituídos', "autor": 'Ciclano' },
        { "id": 3, "idAutor": 3, "titulo": 'Por um array real da categoria pego pelo BD', "autor": 'Beltrano' }
    ]

    const onCriarArtigoBtn = e => {
        e.preventDefault();
        navigate('/editar');
    }

    const onLerArtigoBtn = e =>{
        e.preventDefault();
        navigate('/ler');
    }

    return (
        <div>
            <h1>Artigos</h1>
            <p>Aqui deverá aparecer os artigos</p>
            <Topicos />

            <Artigos
                idUser={1}
                itens={artigos}
                onClickLer={onLerArtigoBtn}
                onClickEditar={onCriarArtigoBtn}
            />
        </div>
    )
}

export default ExplorarArtigos