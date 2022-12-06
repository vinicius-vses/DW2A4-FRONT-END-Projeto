import SelectComponents from "../components/SelectComponents";
import Input from "../components/Input";
import { useState } from "react";

function CriarArtigo() {
  let [disciplina, setDisciplina] = useState("Educação Financeira");
  let [titulo, setTitulo] = useState("");
  let [conteudo, setConteudo] = useState("");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token")
    },
    body: JSON.stringify({
      "disciplina": disciplina,
      "titulo": titulo,
      "conteudo": conteudo,
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

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/criarArtigo", options).then((response) => {
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
        <Input className="input-style submit" value="Publicar" type="submit" />
      </form>
    </div>
  </>
)};

export default CriarArtigo;