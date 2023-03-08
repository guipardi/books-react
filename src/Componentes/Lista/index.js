import ItemLista from "../ItemLista"
import styled from "styled-components"

const StyledList = styled.ul`
    display: flex;
`

const Lista = () => {

    const textoOpcoes = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"]

    return (
        <StyledList>
            {textoOpcoes.map( palavra => (
                <ItemLista texto={palavra}></ItemLista>
            ) )}
        </StyledList>
    )
}

export default Lista 