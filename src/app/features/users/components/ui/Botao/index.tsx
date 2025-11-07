import { Btn, Texto } from "./style";

interface BotaoProps {
  texto: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick?: () => void;
}

export default function Botao({ texto, width, height, borderRadius, onClick }: BotaoProps) {
  return (
    <Btn width={width} height={height} borderRadius={borderRadius} onClick={onClick}>
      <Texto>{texto}</Texto>
    </Btn>
  );
}
