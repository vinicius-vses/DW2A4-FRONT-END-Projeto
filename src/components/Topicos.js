import React, { useState } from 'react';

function Topicos() {
    const [topico, setTopico] = useState("#financeira");

    return (
        <div>
            <div className="btn-group">
                <button className={topico == '#financeira' ? 'btn-active' : ''}
                    onClick={() => {
                        setTopico("#financeira")
                        //...
                    }
                    }
                >Educação Financeira</button>
                <button className={topico == '#filosofica' ? 'btn-active' : ''}
                    onClick={() => {
                        setTopico("#filosofica")
                        //...
                    }
                    }
                >Educação Filosófica</button>
                <button className={topico == '#fisicamental' ? 'btn-active' : ''}
                    onClick={() => {
                        setTopico("#fisicamental")
                        //...
                    }
                    }
                >Educação Física e Mental</button>
                <button className={topico == '#funcional' ? 'btn-active' : ''}
                    onClick={() => {
                        setTopico("#funcional")
                        //...
                    }
                    }
                >Educação Funcional</button>
            </div>
            <a id='saida'>{topico}</a>
        </div>
    )
}

export default Topicos