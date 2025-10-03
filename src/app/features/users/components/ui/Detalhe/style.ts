"use client";

import styled from "styled-components";
import { cores } from "@/app/styles/theme";


export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0px 30px;

`;

export const Linha = styled.hr`
  flex: 1; 
  height: 2px;
  border: none;
  margin: 0px 60px;
  border-top: 3px solid ${cores.amareloMostarda};
`;

export const Titulo = styled.h1`
  color: ${cores.amareloMostarda};
  font-size: 24px;
  margin: 0;  
  `;
