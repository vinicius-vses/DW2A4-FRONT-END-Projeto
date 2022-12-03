import Topicos from "../components/Topicos";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom"
import React, { useState } from 'react';

function ExplorarArtigos(props) {
    
    const isLogged = (localStorage.getItem('isLogged') === 'true');
    
    const navigate = useNavigate();

    const onCriarArtigoBtn = e =>{
        e.preventDefault();
        navigate('/criar');
    }

    return (
        <div>
            <h1 style={{ marginLeft: '36px' }}>
                Artigos
                {isLogged ?
                <input
                    className="input-style submit right-icon"
                    style={{marginRight: '36px'}}
                    value="Criar novo artigo"
                    type="submit"
                    onClick={onCriarArtigoBtn}
                />
                : ''}
                </h1>
            <Topicos />
        </div>
    )
}

export default ExplorarArtigos