import { Quadrado } from "./style";
import { StaticImageData } from "next/image";

interface CasasProps {
  background: string | StaticImageData;
  house: string;
  onClick?: () => void;
}

export default function Casas({ background, house, onClick }: CasasProps) {
  return (
    <Quadrado
      background={background}
      onClick={onClick}
      aria-label={`Ver personagens da casa ${house}`}
      role="button"
      title={house}
    />
  );
}
