import { useEffect, useState } from "react";

import Detalhe from "../../ui/Detalhe";
import HeaderPersonagens from "../../ui/Header/HeaderPersonagens";
import { Container, LayoutPersonagens } from "./style";
import ConjuntoPersonas from "../../ui/ConjuntoPersonagens";



export default function Personagens() {
    const [titulo, setTitulo] = useState("Carregando...");

    useEffect(() => {
        setTitulo("Personagens");

    }, []);


    return (
        <>
            <HeaderPersonagens />
            <LayoutPersonagens>
                <Container>
                    <Detalhe titulo={"Personagens"} />
                    <ConjuntoPersonas />
                </Container>
            </LayoutPersonagens>

        </>

    );
}                      