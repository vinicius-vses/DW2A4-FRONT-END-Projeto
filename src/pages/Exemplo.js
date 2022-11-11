import Input from '../components/Input';
import SelectComponents from '../components/SelectComponents';
import Topicos from '../components/Topicos';
import Artigos from '../components/Artigos';
import SubmitIcon from '../components/SubmitIcon';
import ProfileIcon from '../components/ProfileIcon';

function Exemplo() {
    const artigos = [ //No funcionamento real o array virá direto do BD (ex: SELECT * tbArtigos WHERE TOPICO = "#financeira")
        { "id": 1, "idAutor": 2, "titulo": 'Este é um artigo estático de testes', "autor": 'Fulano' },
        { "id": 2, "idAutor": 1, "titulo": 'Esses artigos deverão ser substituídos', "autor": 'Ciclano' },
        { "id": 3, "idAutor": 3, "titulo": 'Por um array real da categoria pego pelo BD', "autor": 'Beltrano' }
    ]

    function setInput(input) {
        console.log(input);
    }

    return (
        <>
            <h1>Exibição dos componentes...</h1>

            <ProfileIcon onClick={() => alert("Meu perfil")} />

            <form onSubmit={() => alert("Submit clicado")}>

                <Input
                    className="input-style"
                    label="Exemplo de Input:  *"
                    type="text" id="exemplo"
                    placeholder="Veja a saída ex. no console"
                    onInput={e => console.log(e.target.value)}
                />

                <Input
                    className="input-style"
                    label="Mais um input:  *"
                    type="password" id="exemplo2"
                    placeholder="Digite sua senha"
                    onInput={e => setInput("estou vendo sua senha: " + e.target.value)}
                />
                <select className="input-style"><SelectComponents /></select>
                <Input
                    className="input-style submit"
                    value="Testar submit"
                    type="submit"
                />
            </form>

            <Topicos />

            <Artigos
                idUser={1}
                itens={artigos}
                onClickLer={e => console.log('redireciona para o artigo... ')}
                onClickEditar={e => console.log('redireciona para a página de edição do artigo... ')}
            />

            <SubmitIcon
                className="input-style exit"
                value="Sair"
                type="submit"
                src="https://icons.veryicon.com/png/o/object/material-design-icons/exit-to-app.png"
                label="Ícone de saída do aplicativo"
                onClick={() => console.log("saindo...")}
            />

            <Input
                className="input-style submit excluir"
                value="Excluir"
                type="submit"
                onClick={() => console.log("Excluir")}
            />
        </>
    )
}

export default Exemplo