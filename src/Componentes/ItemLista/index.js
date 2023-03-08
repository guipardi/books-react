import "./ItemLista.css"

const ItemLista = (props) => {
    return (
        <li className="item-lista">{props.texto}</li>
    )
}

export default ItemLista