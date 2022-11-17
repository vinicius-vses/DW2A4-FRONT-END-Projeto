import React, { useState } from 'react';
import Artigos from './Artigos';

//mock / teste
import { artigosFilosofica, artigosFinanceira, artigosFisicamental, artigosFuncional, onCriarArtigoBtn, onLerArtigoBtn } from '../mock';
//

function Topicos() {
    const [topico, setTopico] = useState('#financeira');
    const [artigos, setArtigos] = useState(artigosFinanceira);
    const [loading, setLoading] = useState(false);

    function getArtigos(_topico) { // VAI PEGAR OS ARTIGOS DA API (Por hora usa os testes)
        setLoading(true); //INSERIR DESIGN CARREGANDO
        setTimeout(() => {
            let artigos = [];

            switch (_topico) {
                case '#financeira':
                    artigos = artigosFinanceira
                    break;
                case '#funcional':
                    artigos = artigosFuncional
                    break;
                case '#fisicamental':
                    artigos = artigosFisicamental
                    break;
                case '#filosofica':
                    artigos = artigosFilosofica
                    break;
            }

            setArtigos(artigos)
            setTopico(_topico)
            setLoading(false)
        }, 1000);
    }

    return (
        <div>
            <a>{loading ? 'CARREGANDO...' : ''}</a>
            <div className="btn-group">
                <button className={topico == '#financeira' ? 'btn-active' : ''}
                    onClick={() => {
                        getArtigos("#financeira")
                    }
                    }
                >Educação Financeira</button>
                <button className={topico == '#filosofica' ? 'btn-active' : ''}
                    onClick={() => {
                        getArtigos("#filosofica")
                    }
                    }
                >Educação Filosófica</button>
                <button className={topico == '#fisicamental' ? 'btn-active' : ''}
                    onClick={() => {
                        getArtigos("#fisicamental")
                    }
                    }
                >Educação Física e Mental</button>
                <button className={topico == '#funcional' ? 'btn-active' : ''}
                    onClick={() => {
                        getArtigos("#funcional")
                    }
                    }
                >Educação Funcional</button>
            </div>
            <Artigos
                idUser={1}
                itens={artigos}
            />
        </div>
    )
}

export default Topicos
