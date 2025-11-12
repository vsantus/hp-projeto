"use client";

import Casas from "./Casas";
import grifinoria from "../../../../../assets/grifinoria.jpg";
import sonserina from "../../../../../assets/sonserina.jpg";
import lufalufa from "../../../../../assets/lufalufa.jpg";
import corvinal from "../../../../../assets/corvinal.jpg";
import { Conjunto } from "./style";
import { useRouter } from "next/navigation";

export default function ConjuntoCasas() {
  const router = useRouter();

  const handleNavigate = (house: string) => {
    const houseParam = encodeURIComponent(house.toLowerCase());
    router.push(`/personagens?house=${houseParam}`);
  };

  return (
    <Conjunto>
      <Casas background={grifinoria} house="Gryffindor" onClick={() => handleNavigate("Gryffindor")} />
      <Casas background={sonserina} house="Slytherin" onClick={() => handleNavigate("Slytherin")} />
      <Casas background={lufalufa} house="Hufflepuff" onClick={() => handleNavigate("Hufflepuff")} />
      <Casas background={corvinal} house="Ravenclaw" onClick={() => handleNavigate("Ravenclaw")} />
    </Conjunto>
  );
}
