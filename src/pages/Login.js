import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import setLoginAttributes from "../components/Auth";
import { useState } from 'react';

function Login() {
    const navigate = useNavigate();
    let [email, setEmail] = useState("");
    let [senha, setSenha] = useState("");

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": email,
            "senha": senha
        }),
    };

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleSenha = (e) => {
        e.preventDefault();
        setSenha(e.target.value);
    };

    const onSubmit = e => {
        // CLARAMENTE PRECISAREMOS DE VALIDAÇÕES ANTES DE MANDAR PARA A HOME
        // se campos vazios OU dados inválidos N entra:

        // se tudo certo entra:
        e.preventDefault();
        fetch('http://localhost:8000/authUser', options)
        .then((response) => {
            response.json().then((data) => {
                if(data.auth) {
                    localStorage.setItem("token", data.token);
                    setLoginAttributes(true, data.token, data.token)
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
                    <h1>Conectar</h1>
                    <form onSubmit={onSubmit}>
                        <Input
                            className="input-style"
                            label="Email institucional:  "
                            type="email" id="email-login"
                            onInput={handleEmail}
                        />
                        <Input
                            className="input-style"
                            label="Senha:  "
                            type="password" id="pass-login"
                            onInput={handleSenha}
                        />
                        <Input
                            className="input-style submit"
                            value="Fazer login"
                            type="submit"
                        />
                    </form>
                    <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login