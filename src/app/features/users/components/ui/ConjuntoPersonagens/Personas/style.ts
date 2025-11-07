// Personas/style.ts
"use client";

import { StaticImageData } from "next/image";
import styled, { css } from "styled-components";

interface MolduraProps {
  background?: string | StaticImageData;
  size?: "md" | "xl";
}

const sizeMap = {
  md: css`
    width: 163px;
    height: 227px;
  `,
  xl: css`
    width: 256px;
    height: 356px;
  `,
};

export const MolduraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoPersonagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Moldura = styled.div<MolduraProps>`
  cursor: pointer;
  display: block;
  overflow: hidden;
  justify-content: space-between;
  width: 100%;
  ${({ size = "md" }) => sizeMap[size]}
  border: 3px solid var(--amarelo-mostarda);

  background: ${({ background }) => {
    if (!background) return "var(--bg-default)";
    const bg =
      typeof background === "string"
        ? background
        : (background as StaticImageData).src;

    const isImage =
      /\.(jpe?g|png|gif|webp|avif)$/i.test(bg) || bg.startsWith("http");

    return isImage ? `url(${bg}) center/cover no-repeat` : bg;
  }};
`;

export const Descricao = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  gap: 10px;
  width: 50%;
  height: 356px;
`;



export const Nome = styled.h1`
  margin-top: 8px;
  font-size: 1rem;
  font-family:"Arial", sans-serif;
  font-weight: 400;
  color: var(--amarelo-mostarda);
`;
