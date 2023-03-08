import ItemLista from "../ItemLista"
import iconeUm from "../../Imagens/perfil.svg"
import iconeDois from "../../Imagens/sacola.svg"
import styled from "styled-components"

const StyledListaIcones = styled.ul`
    display: flex;
    align-items: center;
`

const ListaIcones = () => {

    const icones = [iconeUm, iconeDois]

    return (
        <StyledListaIcones>
            {icones.map( icone => (
                <ItemLista texto={<img src={icone}></img>}/>
            ) )}
        </StyledListaIcones>
    )
}

export default ListaIcones