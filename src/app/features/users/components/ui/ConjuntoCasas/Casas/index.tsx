import { Quadrado } from "./style";
import { StaticImageData } from "next/image";

interface QuadradoProps {
  background: string | StaticImageData;
}

export default function Casas({ background }: QuadradoProps) {
  return <Quadrado background={background} />;
}
