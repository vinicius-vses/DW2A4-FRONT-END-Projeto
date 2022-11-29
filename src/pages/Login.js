import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import setLoginAttributes from "../components/Auth";

function Login() {
    const navigate = useNavigate();

    const onSubmit = e => {
        // CLARAMENTE PRECISAREMOS DE VALIDAÇÕES ANTES DE MANDAR PARA A HOME
        // se campos vazios OU dados inválidos N entra:

        // se tudo certo entra:
        e.preventDefault();
        setLoginAttributes(true, 'Usuário de Teste, Jorge', 1)
        navigate('/');
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
                        />
                        <Input
                            className="input-style"
                            label="Senha:  "
                            type="password" id="pass-login"
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