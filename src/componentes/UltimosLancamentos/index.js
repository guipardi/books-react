import styled from 'styled-components'
import { livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo"
import CardRecomenda from '../CardRecomenda'
import livroImg from "../../imagens/livro2.png"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const UltimosLancamentos = () => {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px">ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>

            <CardRecomenda 
            texto="Talvez você se interesse por..." 
            subtitulo="Angular11" 
            descricao="Construindo uma aplicação com a plataforma Google" 
            src={livroImg}
            />

        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos