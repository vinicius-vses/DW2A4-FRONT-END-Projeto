import ItemArtigo from "./ItemArtigo"
import { Link, useNavigate } from "react-router-dom"

function Artigos(props) {
    const navigate = useNavigate();
    const isLogged = (localStorage.getItem('isLogged') === 'true');

    const onEditarArtigoBtn = e => {
        navigate('/editar');
    }

    const onLerArtigoBtn = id => {
        navigate(`/ler/${id}`);
    }

    const { idUser, itens } = props; // os itens deverão vir do Banco de Dados
    return itens.map(item => {
        let idArtigo = item.id
        let titulo = item.titulo
        let autor = item.autor
        if (item.idAutor == idUser && isLogged)
            return (
                <div key={`artigo-${idArtigo}`} className="component-container">
                    <ItemArtigo
                        titulo={titulo}
                        autor={autor}
                        id={idArtigo}
                        onClick={() => onLerArtigoBtn(idArtigo)}
                    />
                    <button className="input-style submit enxuto editBtn" onClick={onEditarArtigoBtn}>Editar</button>
                </div>
            )
        return (
            <div key={`artigo-${idArtigo}`} className="component-container">
                <ItemArtigo
                    titulo={titulo}
                    autor={autor}
                    id={idArtigo}
                    onClick={() => onLerArtigoBtn(idArtigo)}
                />
            </div>
        )
    });
}

export default Artigos