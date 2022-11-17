import ItemArtigo from "./ItemArtigo"
import { Link, useNavigate } from "react-router-dom"

function Artigos(props) {
    const navigate = useNavigate();

    const onEditarArtigoBtn = e => {
        e.preventDefault();
        navigate('/editar');
    }

    const onLerArtigoBtn = e => {
        e.preventDefault();
        navigate('/ler');
    }

    let idArtigo, titulo, autor
    const { idUser, itens } = props;

    return itens.map(item => {
        idArtigo = item.id
        titulo = item.titulo
        autor = item.autor
        if (item.idAutor == idUser)
            return (
                <div className="component-container">
                    <ItemArtigo
                        titulo={titulo}
                        autor={autor}
                        id={idArtigo}
                        onClick={onLerArtigoBtn}
                    />
                    <button className="input-style submit enxuto editBtn" onClick={onEditarArtigoBtn}>Editar</button>
                </div>
            )
        return (
            <div className="component-container">
                <ItemArtigo
                    titulo={titulo}
                    autor={autor}
                    id={idArtigo}
                    onClick={onLerArtigoBtn}
                />
            </div>
        )
    });
}

export default Artigos