import { useEffect, useState } from "react";

import Detalhe from "../../ui/Detalhe";
import HeaderPersonagens from "../../ui/Header/HeaderPersonagens";
import { LayoutPersonagens } from "./style";
import ConjuntoPersonas from "../../ui/ConjuntoPersonagens";



export default function Personagens() {
    const [titulo, setTitulo] = useState("Carregando...");

    useEffect(() => {
        setTitulo("Personagens");

    }, []);


    return (
        <>
            <LayoutPersonagens>
                {/* <HeaderPersonagens /> */}
                {/* <Detalhe titulo={"Personagens"}/> */}
                <ConjuntoPersonas />
            </LayoutPersonagens>

        </>

    );
}                      