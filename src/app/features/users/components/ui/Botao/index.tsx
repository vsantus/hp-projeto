import { Btn, Texto } from "./style";

interface BotaoProps {
  texto: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  top?: string;
  left?: string;
  onClick?: () => void;
}

export default function Botao({
  texto,
  width,
  height,
  borderRadius,
  top,
  left,
  onClick,
}: BotaoProps) {
  return (
    <Btn
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      $top={top}
      $left={left}
      onClick={onClick}
    >
      <Texto>{texto}</Texto>
    </Btn>
  );
}
