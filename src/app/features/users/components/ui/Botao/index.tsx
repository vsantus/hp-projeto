"use client";

import { Btn, Texto } from "./style";

interface BotaoProps {
  top: string;
  left: string;
  texto: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick?: () => void;
}

export default function Botao({ texto, width, height, borderRadius, onClick, top, left }: BotaoProps) {
  return (
    <Btn width={width} height={height} borderRadius={borderRadius} onClick={onClick} top={top} left={left}>
      <Texto>{texto}</Texto>
    </Btn>
  );
}
