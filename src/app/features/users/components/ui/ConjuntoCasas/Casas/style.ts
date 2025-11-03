"use client";

import { StaticImageData } from "next/image";
import styled from "styled-components";

interface QuadradoProps {
 background: string | StaticImageData;
}
export const Quadrado = styled.div<QuadradoProps>`
  width: 272px;
  height: 288px;

  background: ${({ background }) => {
    const bg =
      typeof background === "string"
        ? background
        : (background as StaticImageData).src;

    const isImage =
      bg.includes(".jpg") ||
      bg.includes(".png") ||
      bg.includes(".jpeg") ||
      bg.includes("http");

    return isImage ? `url(${bg}) center/cover no-repeat` : bg;
  }};
`;
