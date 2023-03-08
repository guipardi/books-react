import "./Lista.css"
import ItemLista from "../ItemLista"

const Lista = () => {

    const textoOpcoes = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"]

    return (
        <ul className="lista">
            {textoOpcoes.map( palavra => (
                <ItemLista texto={palavra}></ItemLista>
            ) )}
        </ul>
    )
}

export default Lista 