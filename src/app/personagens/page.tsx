"use client";

import { useEffect, useState } from "react";

import Detalhe from "../features/users/components/ui/Detalhe";
import HeaderPersonagens from "../features/users/components/ui/Header/HeaderPersonagens";

import ConjuntoPersonas from "../features/users/components/ui/ConjuntoPersonagens";
import { Container, LayoutPersonagens } from "@/app/personagens/style";

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