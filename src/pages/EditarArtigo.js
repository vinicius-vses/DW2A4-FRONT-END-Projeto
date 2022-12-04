import SelectComponents from '../components/SelectComponents'
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Input from "../components/Input";

function EditarArtigo(){ // O ARQUIVO PARA EDIÇÃO DEVERÁ SER CARREGADO E PASSADO PARA CÁ PARA RENDERIZAR OS COMPONENTES PREENCHIDOS
    const params = useParams()
    const { id } = params
    const onSubmit = e =>{
        e.preventDefault();
    }

    // TO DO: É necessário verificar se o usuário tem permissão para editar o item
    // Sugestão: Caso tenha ? Exibe tela de edição, senão : exibe tela de notfound (ou forbidden nesse caso)
    return(
        <>
            <div className="formulario-artigo">
                <form onSubmit={onSubmit}>
                    <h1>Criar artigo</h1>
                    <div className='select-disciplina'>
                        <p>Disciplina: *</p>
                        <select className="input-style"><SelectComponents /></select>
                    </div>
                    <div className='textarea-style'>
                        <p>Título: *</p>
                        <textarea rows={2} />
                    </div>
                    <div className='textarea-style'>
                        <p>Conteúdo: *</p>
                        <textarea rows={20} />
                    </div>
                    <div className="input-group">
                        <Input
                            className="input-style submit"
                            value="Atualizar"
                            type="submit"
                        />
                        <Input
                            className="input-style submit excluir"
                            value="Excluir"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditarArtigo