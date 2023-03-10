import { useState } from "react";
import styled from "styled-components";
import Input from "../Input"
import { livros } from "./livros"

const ContainerPesquisa = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const LivroPesquisado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    s}
`

const Pesquisa = () => {

    const [livroPesquisado, setLivroPesquisado] = useState("")

    return (
        <ContainerPesquisa>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre sua próxima leitura em nossa estante</SubTitulo>
            <Input placeholder="Ex : O Pequeno Príncipe" aoAlterado={e => {
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(e.target.value))
                setLivroPesquisado(resultadoPesquisa)
            }}/>

            {livroPesquisado.map( livro => (
                <LivroPesquisado>
                    <p>{livro.nome}</p>
                    <img src={livro.src} />
                </LivroPesquisado>
            ) )}

        </ContainerPesquisa>
    )
}

export default Pesquisa;