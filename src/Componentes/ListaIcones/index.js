import ItemLista from "../ItemLista"
import "./ListaIcones.css"
import iconeUm from "../../Imagens/perfil.svg"
import iconeDois from "../../Imagens/sacola.svg"

const ListaIcones = () => {

    const icones = [iconeUm, iconeDois]

    return (
        <ul className="lista-icones">
            {icones.map( icone => (
                <ItemLista texto={<img src={icone}></img>}/>
            ) )}
        </ul>
    )
}

export default ListaIcones