"use client";

import styled from "styled-components";

interface QuadradoProps {
    background: string;
}

export const Quadrado = styled.div<QuadradoProps>`
  width: 272px;
  height: 288px;
  background: ${({ background }) => background};
  `;