import Input from "../components/Input"
import {Link, useNavigate} from "react-router-dom"
import setLoginAttributes from "../components/Auth";

// MOCK PARA TESTE DE ROUTES -> ESTE ARQUIVO DEVE SER AJUSTADO TANTO EM LAYOUT QUANTO FUNCIONAMENTO!
function Login() {
    const navigate = useNavigate();

    const onSubmit = e =>{
        // CLARAMENTE PRECISAREMOS DE VALIDAÇÕES ANTES DE MANDAR PARA A HOME
        e.preventDefault();
        setLoginAttributes(true, 'Usuário de Teste, Jorge', 1)
        navigate('/');
    }
    return (
        <div>
            <h1>Fazer login</h1>
            <p>Aqui deverá aparecer o login</p>

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
    )
}

export default Login