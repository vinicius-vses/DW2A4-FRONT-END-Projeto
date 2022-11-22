import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { artigosFilosofica, artigosFinanceira, artigosFisicamental, artigosFuncional, mockDescricao } from '../mock';
import NotFound from '../components/NotFound';

function LerArtigo() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [artigo, setArtigo] = useState(null)

    const params = useParams()
    const { id } = params

    useEffect(() => {
        getArtigos();
    }, []);

    const onEditarArtigoBtn = id => {
        navigate(`/editar/${id}`);
    }

    // Será substituido pela chamada do BD
    function getArtigos() {
        setLoading(true)
        setTimeout(() => {
            let result = null
            artigosFinanceira.forEach(element => {
                if (element.id == id)
                    return result = element
            });
            artigosFilosofica.forEach(element => {
                if (element.id == id)
                    return result = element
            });
            artigosFisicamental.forEach(element => {
                if (element.id == id)
                    return result = element
            });
            artigosFuncional.forEach(element => {
                if (element.id == id)
                    return result = element
            });
            setArtigo(result)
            setLoading(false)
        }, 1000);
    }

    return (
        <div>
            {
                loading ?
                    <a className='loading-container'>{loading ? 'CARREGANDO...' : ''}</a>
                    : artigo ?
                    <div className='ler-artigo'>
                        <h1>{artigo.titulo}</h1>
                        <a>Postado por {artigo.autor} {parseInt(localStorage.getItem('userId')) === artigo.idAutor ? '(Eu)' : ''}</a>
                        {parseInt(localStorage.getItem('userId')) === artigo.idAutor ? <button className="input-style submit enxuto editBtn" onClick={() => onEditarArtigoBtn(artigo.id)}>Editar</button> : ''}
                        <br/><br/>
                        <p>{// Deverá ser substituido pelo conteúdo resgatado do BD (ex: artigo.conteudo)
                            mockDescricao
                        }</p>
                    </div>
                        :
                        <NotFound titulo='Artigo não encontrado'
                        descricao='Não foi possível localizar este artigo. <br/> Pode ser que ele tenha sido ocultado ou excluído.'
                        alternative_action= {<Link className='input-style submit' to="/artigos">Voltar ao Explorador de Artigos</Link>}
                        />
            }

        </div>
    )
}

export default LerArtigo