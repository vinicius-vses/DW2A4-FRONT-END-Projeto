import SelectComponents from '../components/SelectComponents'
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NotFound from '../components/NotFound';

function EditarArtigo(){ // O ARQUIVO PARA EDIÇÃO DEVERÁ SER CARREGADO E PASSADO PARA CÁ PARA RENDERIZAR OS COMPONENTES PREENCHIDOS
    const params = useParams()
    const { id } = params

    // TO DO: É necessário verificar se o usuário tem permissão para editar o item
    // Sugestão: Caso tenha ? Exibe tela de edição, senão : exibe tela de notfound (ou forbidden nesse caso)
    return(
        <>
        <h1>Editar artigo</h1>
        <p>Aqui deverá aparecer a página de edição de artigo</p>
        <select className="input-style"><SelectComponents /></select>
        </>
    )
}

export default EditarArtigo