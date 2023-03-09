import styled from "styled-components"

const StyledItemLista = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const ItemLista = (props) => {
    return (
        <StyledItemLista>{props.texto}</StyledItemLista>
    )
}

export default ItemLista