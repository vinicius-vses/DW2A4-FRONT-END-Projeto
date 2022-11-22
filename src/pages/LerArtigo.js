import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { artigosFilosofica, artigosFinanceira, artigosFisicamental, artigosFuncional } from '../mock';
import NotFound from '../components/NotFound';

function LerArtigo() {
    const [loading, setLoading] = useState(false);
    const [artigo, setArtigo] = useState(null)

    const params = useParams()
    const { id } = params

    useEffect(() => {
        getArtigos();
    }, []);

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
                        'Artigo existe'
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