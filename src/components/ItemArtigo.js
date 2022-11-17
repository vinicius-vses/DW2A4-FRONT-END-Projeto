function ItemArtigo(props) {
    const { titulo, autor, id, onClick } = props;
    return (
        <>
            <a className="titulo-artigo">{titulo}</a>
            <br />
            <a className="autor-artigo">Postado por {autor}</a><br/>
            <button className="input-style submit enxuto" onClick={onClick}>Ler artigo</button>
        </>
    )
}

export default ItemArtigo