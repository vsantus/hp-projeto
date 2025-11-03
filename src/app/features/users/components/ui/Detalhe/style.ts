"use client";

import styled from "styled-components";
import { cores } from "@/app/styles/theme";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

`;

export const Linha = styled.hr`
  flex: 1; 
  height: 2px;
  border: none;
  border-top: 3px solid ${cores.amareloMostarda};
`;

export const Titulo = styled.h1`
  color: ${cores.amareloMostarda};
  font-size: 24px;
  margin: 0;  
  `;
