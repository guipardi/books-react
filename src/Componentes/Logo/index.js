import logo from "../../Imagens/logo.svg"
import styled from "styled-components"

const StyledLogo = styled.div`
    display: flex;
    font-size: 24px;
    margin-right: 10px;
`

const Logo = () => {
    return (
        <StyledLogo>
            <img src={logo} alt="Logo do site"></img>
            <p><strong>Alura</strong> Books</p>
        </StyledLogo>
    )
}

export default Logo