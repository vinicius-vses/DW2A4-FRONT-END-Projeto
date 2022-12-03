import Input from "../components/Input";
import {Link, useNavigate} from "react-router-dom";
import setLoginAttributes from "../components/Auth";

function Cadastro() {
    const navigate = useNavigate();

    const onSubmit = e =>{
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
                    <h1>Cadastrar</h1>
                    <form onSubmit={onSubmit}>
                        <Input
                            className="input-style"
                            label="Nome completo:   *"
                            type="text" id="nome-cadastro"
                        />
                        <Input
                            className="input-style"
                            label="Email institucional:   *"
                            type="email" id="email-login"
                        />
                        <Input
                            className="input-style"
                            label="Senha:   *"
                            type="password" id="pass-login"
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