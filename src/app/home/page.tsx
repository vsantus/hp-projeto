"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import logo from "../assets/harry-logo.png";
import Botao from "../features/users/components/ui/Botao";
import ConjuntoCasas from "../features/users/components/ui/ConjuntoCasas";
import Detalhe from "../features/users/components/ui/Detalhe";
import HeaderHome from "../features/users/components/ui/Header/HeaderHome";
import { LayoutHome, Imagem, FooterHome, ContainerBelow } from "./style";
import { hpApi } from "../services/hpApi";

export default function Home() {
  const [titulo, setTitulo] = useState("Carregando...");
  const router = useRouter();

  useEffect(() => {
    setTitulo("Navegue pelas Casas");
  }, []);

  const handleClick = async () => {
    const personagens = await hpApi.getAllCharacters();

    localStorage.setItem("personagens", JSON.stringify(personagens));
    console.log(personagens, 'personagens');

    router.push("/personagens");
  };


  return (
    <>
      <LayoutHome>
        <HeaderHome />
        <Imagem src={logo.src} alt="Logo Harry Potter" />
        <Botao
          left="220px"
          top="254px"
          texto="VEJA TODOS OS PERSONAGENS"
          width={"210px"}
          height={"59px"}
          borderRadius={"10px"}
          onClick={handleClick}
        />
      </LayoutHome>
      <FooterHome>
        <ContainerBelow>
          <Detalhe titulo={"Navegue pelas Casas"} />
          <ConjuntoCasas />
        </ContainerBelow>
      </FooterHome>
    </>
  );
}
