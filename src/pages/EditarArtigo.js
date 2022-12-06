import SelectComponents from "../components/SelectComponents";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NotFound from "../components/NotFound";
import Input from "../components/Input";

function EditarArtigo() {
  const navigate = useNavigate();
  let [disciplina, setDisciplina] = useState("");
  let [titulo, setTitulo] = useState("");
  let [conteudo, setConteudo] = useState("");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
    body: JSON.stringify({
      disciplina: disciplina,
      titulo: titulo,
      conteudo: conteudo,
    }),
  };

  const handleDisciplina = (e) => {
    e.preventDefault();
    setDisciplina(e.target.value);
  };

  const handleTitulo = (e) => {
    e.preventDefault();
    setTitulo(e.target.value);
  };

  const handleConteudo = (e) => {
    e.preventDefault();
    setConteudo(e.target.value);
  };

  const params = useParams();
  const { id } = params;
  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/atualizarArtigo", options).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });
  };
return (
    <>
      <div className="formulario-artigo">
        <form onSubmit={onSubmit}>
          <h1>Criar artigo</h1>
          <div className="select-disciplina">
            <p>Disciplina: </p>
            <select className="input-style" onChange={handleDisciplina}>
              <SelectComponents />
            </select>
          </div>
          <div className="textarea-style">
            <p>Título:</p>
            <textarea rows={2} value={titulo} onChange={handleTitulo} />
          </div>
          <div className="textarea-style">
            <p>Conteúdo: *</p>
            <textarea rows={20} onChange={handleConteudo} />
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
  );
}

export default EditarArtigo;