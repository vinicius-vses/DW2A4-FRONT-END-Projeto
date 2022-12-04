import SelectComponents from '../components/SelectComponents';
import Input from "../components/Input";

function CriarArtigo(){
    const onSubmit = e =>{
        e.preventDefault();
    }

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
                    <Input
                        className="input-style submit"
                        value="Publicar"
                        type="submit"
                    />
                </form>
            </div>
        </>
    )
}

export default CriarArtigo