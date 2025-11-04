import { StaticImageData } from "next/image";
import { Moldura, MolduraContainer, Nome } from "./style";

interface MolduraProps {
  background: string | StaticImageData;
  nome?: string; 
}

export default function Personas({ background, nome }: MolduraProps) {
  return (
    <MolduraContainer>
      <Moldura background={background} />
      <Nome>{nome || "Nome do personagem"}</Nome>
    </MolduraContainer>
  );
}
