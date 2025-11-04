"use client";

import { StaticImageData } from "next/image";
import styled from "styled-components";

interface MolduraProps {
  background: string | StaticImageData;
}

export const MolduraContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center; 
    `;

export const Moldura = styled.div<MolduraProps>`
  width: 163px;
  height: 227px;
  cursor: pointer;
  border: 3px solid var(--amarelo-mostarda);

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


export const Nome = styled.h1`
  margin-top: 8px;
  font-size: 1rem;
  font-family:"Arial", sans-serif;
  font-weight: 400;
  color: var(--amarelo-mostarda);
`;