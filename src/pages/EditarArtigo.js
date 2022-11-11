import SelectComponents from '../components/SelectComponents'

function EditarArtigo(){ // O ARQUIVO PARA EDIÇÃO DEVERÁ SER CARREGADO E PASSADO PARA CÁ PARA RENDERIZAR OS COMPONENTES PREENCHIDOS
    return(
        <>
        <h1>Editar artigo</h1>
        <p>Aqui deverá aparecer a página de edição de artigo</p>
        <select className="input-style"><SelectComponents /></select>
        </>
    )
}

export default EditarArtigo