"use client";

import { useEffect, useState } from "react";

import logo from "../assets/harry-logo.png";

import Botao from "../features/users/components/ui/Botao";
import ConjuntoCasas from "../features/users/components/ui/ConjuntoCasas";
import Detalhe from "../features/users/components/ui/Detalhe";

import { LayoutHome, Imagem, FooterHome, ContainerBelow } from "./style";
import HeaderHome from "../features/users/components/ui/Header/HeaderHome";
import { useRouter } from "next/navigation";

export default function Home() {
  const [titulo, setTitulo] = useState("Carregando...");

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/personagens");
  };

  useEffect(() => {
    setTitulo("Navegue pelas Casas");
  }, []);

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
          onClick={handleNavigate}
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
