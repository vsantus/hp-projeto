import { useEffect, useState } from "react";

import logo from "../../../../../assets/harry-logo.png";

import Botao from "../../ui/Botao";
import ConjuntoCasas from "../../ui/ConjuntoCasas";
import Detalhe from "../../ui/Detalhe";

import { LayoutHome, Imagem, FooterHome } from "./style";
import HeaderHome from "../../ui/Header/HeaderHome";


export default function Home() {
    const [titulo, setTitulo] = useState("Carregando...");

    useEffect(() => {
        setTitulo("Navegue pelas Casas");

    }, []);


    return (
        <>
            {/* <LayoutHome>     */}
            {/* <HeaderHome /> */}
            {/* <Imagem src={logo.src} alt="Logo Harry Potter" /> */}
            {/* <Botao /> */}
            {/* <Detalhe titulo={"Navegue pelas Casas"}/> */}
            {/* <ConjuntoCasas />  */}
            {/* </LayoutHome> */}
            {/* <FooterHome /> */}
        </>

    );
}                      