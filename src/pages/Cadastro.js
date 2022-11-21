import Input from "../components/Input";
import {Link, useNavigate} from "react-router-dom";
import setLoginAttributes from "../components/Auth";

// MOCK PARA TESTE DE ROUTES -> ESTE ARQUIVO DEVE SER AJUSTADO TANTO EM LAYOUT QUANTO FUNCIONAMENTO!
function Cadastro() {
    const navigate = useNavigate();

    const onSubmit = e =>{
        // CLARAMENTE PRECISAREMOS DE VALIDAÇÕES ANTES DE MANDAR PARA A HOME E CADASTRAR
        e.preventDefault();
        setLoginAttributes(true, 'Usuário de Teste, Jorge')
        navigate('/');
    }
    return (
        <div>
            <h1>Fazer cadastro</h1>
            <p>Aqui deverá aparecer o cadastro</p>
            <form onSubmit={onSubmit}>

                <Input
                    className="input-style"
                    label="Nome completo:  *"
                    type="text" id="nome-cadastro"
                />

                <Input
                    className="input-style"
                    label="Email institucional:  *"
                    type="email" id="email-cadastro"
                />
                <Input
                    className="input-style"
                    label="Senha:  *"
                    type="password" id="pass-cadastro"
                />
                <Input
                    className="input-style submit"
                    value="Fazer cadastro"
                    type="submit"
                />
            </form>
            <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
        </div>
    )
}

export default Cadastro