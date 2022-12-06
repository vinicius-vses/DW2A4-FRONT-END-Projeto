import Input from "../components/Input";
import {Link, useNavigate} from "react-router-dom";
import setLoginAttributes from "../components/Auth";
import { useState } from 'react';

function Cadastro() {
    const navigate = useNavigate();
    let [nome, setNome] = useState("");
    let [email, setEmail] = useState("");
    let [senha, setSenha] = useState("");

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "nome": nome,
            "email": email,
            "senha": senha
        }),
    };

    const handleNome = (e) => {
        e.preventDefault();
        setNome(e.target.value);
    };

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleSenha = (e) => {
        e.preventDefault();
        setSenha(e.target.value);
    };


    const onSubmit = e =>{
        e.preventDefault();
        fetch('http://localhost:8000/criarPerfil', options)
        .then((response) => {
            response.json().then((data) => {
                if(data.auth) {
                    localStorage.setItem("token", data.token);
                    navigate('/');
                }
            });
        });
    }
    return (
        <div>
            <div className="grid-conectar">
                <div className="imagem-conectar">
                    <img src="/mainlogo.png" width='200vw' height='250vw'/>
                </div>
                <div className="formulario-conectar">
                    <h1>Cadastrar</h1>
                    <form onSubmit={onSubmit}>
                        <Input
                            className="input-style"
                            label="Nome completo:   *"
                            type="text" id="nome-cadastro"
                            onInput={handleNome}
                        />
                        <Input
                            className="input-style"
                            label="Email institucional:   *"
                            type="email" id="email-login"
                            onInput={handleEmail}
                        />
                        <Input
                            className="input-style"
                            label="Senha:   *"
                            type="password" id="pass-login"
                            onInput={handleSenha}
                        />
                        <Input
                            className="input-style submit"
                            value="Fazer cadastro"
                            type="submit"
                        />
                    </form>
                    <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Cadastro