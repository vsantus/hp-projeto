import { ParagrafoStyled } from "./style";

interface ParagrafoProps {
  titulo?: string;
  children?: React.ReactNode; 
}

export default function Paragrafo({ titulo, children }: ParagrafoProps) {
  return (
    <ParagrafoStyled>
      {titulo}
      {children ? <span>{children}</span> : null}
    </ParagrafoStyled>
  );
}
