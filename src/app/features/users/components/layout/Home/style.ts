import styled from "styled-components";

import background from "../../../../../assets/background-1.jpg";
import "../../../../../styles/variables.scss";

export const LayoutHome = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background.src});
  background-size: cover;
  background-position: center;
`;

export const FooterHome = styled.div`
  height: 524px;
  width: 100%;
  background-color: var(--azul-bg);
`;

export const Imagem = styled.img`
  width: 356px;
  height: 175px;
`;
