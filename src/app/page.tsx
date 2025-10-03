"use client";

import Home from "./features/users/components/layout/Home";
import Casas from "./features/users/components/ui/Casas";
import Detalhe from "./features/users/components/ui/Detalhe";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [titulo, setTitulo] = useState("Carregando...");

  useEffect(() => {
    setTitulo("Navegue pelas Casas");

  }, []);

  return (
    <>
      <Home />
      <Casas />
    </>
  );
}
