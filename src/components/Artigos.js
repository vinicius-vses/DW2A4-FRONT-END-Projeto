import ItemArtigo from "./ItemArtigo"

function Artigos(props) {
    let idArtigo, titulo, autor
    const { idUser, itens, onClickLer, onClickEditar } = props;
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
                        onClick={onClickLer}
                    />
                    <button className="input-style submit enxuto editBtn" onClick={onClickEditar}>Editar</button>
                </div>
            )
        return (
            <div className="component-container">
                <ItemArtigo
                    titulo={titulo}
                    autor={autor}
                    id={idArtigo}
                    onClick={onClickLer}
                />
            </div>
        )
    });
}

export default Artigos