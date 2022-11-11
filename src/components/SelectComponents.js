const CATEGORIAS = ['Educação Financeira', 'Educação Filosófica',
    'Educação Física e Mental', 'Educação Funcional'];

function SelectComponents() {
    return (
        CATEGORIAS.map(item => {
            return <option key={item} value={item}>{item}</option>
        })
    )

}

export default SelectComponents