"use client";

import {  useMemo } from "react";
import { useSearchParams } from "next/navigation";

import Detalhe from "../features/users/components/ui/Detalhe";
import HeaderPersonagens from "../features/users/components/ui/Header/HeaderPersonagens";

import ConjuntoPersonas from "../features/users/components/ui/ConjuntoPersonagens";
import { Container, LayoutPersonagens } from "@/app/personagens/style";

function formatHouseDisplay(houseParam: string | null) {
  if (!houseParam) return "Personagens";
  const map: Record<string, string> = {
    gryffindor: "Grifinória",
    slytherin: "Sonserina",
    hufflepuff: "Lufa-Lufa",
    ravenclaw: "Corvinal",
  };
  const key = houseParam.toLowerCase();
  return map[key] ?? houseParam[0].toUpperCase() + houseParam.slice(1);
}

export default function Personagens() {
  const searchParams = useSearchParams();
  const houseParam = searchParams?.get("house"); 

  const title = useMemo(() => formatHouseDisplay(houseParam), [houseParam]);

  return (
    <>
      <HeaderPersonagens />
      <LayoutPersonagens>
        <Container>
          <Detalhe titulo={title} />
          <ConjuntoPersonas house={houseParam ?? undefined} />
        </Container>
      </LayoutPersonagens>
    </>
  );
}
